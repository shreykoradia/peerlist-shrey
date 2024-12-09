import { FormProp, MenuOptionProp, RadioGroupOptionProp } from "@/types/types";
import { create } from "zustand";
import { menuOption, QUESTION_TYPE } from "../lib/constant";
import { FormResponseObject } from "@/modules/form-viewer/type";

export const useFormStore = create<FormProp>((set, get) => ({
  form: {
    id: crypto.randomUUID(),
    formTitle: "Untitled Form",
    questions: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  uiState: {
    isFormInPreview: false,
    isFormPublished: false,
    isSubmitted: true,
    showBanner: {
      message: "",
      show: false,
      variant: "success",
    },
  },
  hydrateForm: (formData: FormResponseObject) =>
    set((state) => ({
      form: {
        ...state.form,
        ...formData.form,
        questions: formData.form.questions || [],
      },
      uiState: {
        ...state.uiState,
        ...formData.uiState,
      },
    })),
  validateQuestions: () => {
    const state = get();
    const updatedQuestions = state.form.questions.map((question) => {
      let error = "";

      if (question.type === QUESTION_TYPE.SINGLE_SELECT) {
        const invalidOptions = question.radioOptions.filter(
          (option) => option.value.trim() === ""
        );

        if (question.radioOptions.length === 0) {
          error = "Empty options are not allowed";
        }

        if (invalidOptions.length > 0) {
          error = "All options must have valid values.";
        }
      }

      if (!question.questionText.trim()) {
        error = "Question text cannot be empty.";
      }

      return { ...question, error };
    });

    set((state) => ({
      form: {
        ...state.form,
        questions: updatedQuestions,
        updatedAt: new Date(),
      },
    }));

    return updatedQuestions.every((q) => !q.error);
  },
  updateFormTitle: (formId: string, title: string) =>
    set((state) => {
      if (state.form.id === formId) {
        return {
          form: {
            ...state.form,
            formTitle: title,
            updatedAt: new Date(),
          },
        };
      }
      return state;
    }),
  addQuestion: (type) =>
    set((state) => {
      const selectedOption = menuOption.find(
        (opt) => opt.value === type
      ) as MenuOptionProp;
      return {
        form: {
          ...state.form,
          questions: [
            ...state.form.questions,
            {
              id: crypto.randomUUID(),
              questionText: "",
              questionDesc: "",
              type: type,
              selectedOption: selectedOption,
              radioOptions: [],
              answer: "",
            },
          ],
        },
      };
    }),
  removeQuestion: (questionId: string) =>
    set((state) => ({
      form: {
        ...state.form,
        questions: state.form.questions.filter(
          (quest) => quest.id !== questionId
        ),
        updatedAt: new Date(),
      },
    })),
  updateQuestion: (id, updatedProps) =>
    set((state) => ({
      form: {
        ...state.form,
        questions: state.form.questions.map((q) =>
          q.id === id ? { ...q, ...updatedProps } : q
        ),
        updatedAt: new Date(),
      },
    })),
  updateRadioOption: (questionId: string, options: RadioGroupOptionProp[]) =>
    set((state) => ({
      form: {
        ...state.form,
        questions: state.form.questions.map((quest) =>
          quest.id === questionId
            ? { ...quest, radioOptions: options, error: "" }
            : quest
        ),
        updatedAt: new Date(),
      },
    })),
  togglePreviewMode: () => {
    const isValid = get().validateQuestions();
    if (isValid) {
      set((state) => ({
        uiState: {
          ...state.uiState,
          isFormInPreview: !state.uiState.isFormInPreview,
        },
      }));
    }
  },

  publishForm: () => {
    const isValid = get().validateQuestions(); // Reuse the validation function
    if (!isValid) {
      set((state) => ({
        uiState: {
          ...state.uiState,
          showBanner: {
            message: "Please fix errors in the form before publishing.",
            show: true,
            variant: "error",
          },
        },
      }));
    }
    if (isValid) {
      set((state) => {
        const updatedQuestions = state.form.questions.map((question) => {
          if (question.type === QUESTION_TYPE.SINGLE_SELECT) {
            const updatedOptions = question.radioOptions.map((option) => ({
              ...option,
              isEditable: false, // Ensure options are locked on publish
            }));
            return { ...question, radioOptions: updatedOptions };
          }
          return question;
        });

        return {
          form: {
            ...state.form,
            questions: updatedQuestions,
            updatedAt: new Date(),
          },
          uiState: {
            ...state.uiState,
            isFormPublished: true, // Mark form as published
          },
        };
      });
    } else {
      set((state) => ({
        uiState: {
          ...state.uiState,
          showBanner: {
            message: "Please fix errors in the form before publishing.",
            show: true,
            variant: "error",
          },
        },
      }));
    }
  },

  toggleShowBanner: ({ message, variant }) =>
    set((state) => ({
      uiState: {
        ...state.uiState,
        showBanner: {
          message: message,
          show: !state.uiState.showBanner.show,
          variant: variant,
        },
      },
    })),

  reorderQuestions: (sourceIndex, destinationIndex) =>
    set((state) => {
      const updatedQuestions = Array.from(state.form.questions);
      const [removed] = updatedQuestions.splice(sourceIndex, 1);
      updatedQuestions.splice(destinationIndex, 0, removed);

      return {
        form: {
          ...state.form,
          questions: updatedQuestions,
          updatedAt: new Date(),
        },
      };
    }),

  resetForm: () =>
    set(() => ({
      form: {
        id: crypto.randomUUID(),
        formTitle: "Untitled Form",
        questions: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      uiState: {
        isFormInPreview: false,
        isFormPublished: false,
        isSubmitted: false,
        showBanner: {
          message: "",
          show: false,
          variant: "success",
        },
      },
    })),

  toggleSubmitMode: () =>
    set((state) => ({
      uiState: {
        ...state.uiState,
        isSubmitted: true,
      },
    })),

  getFormCompletion: () => {
    const { questions } = get().form;

    if (!questions || questions.length === 0) return 0;

    const answeredQuestions = questions.filter((q) => {
      if (q.type === QUESTION_TYPE.SINGLE_SELECT) {
        return q.answer && q.radioOptions.some((opt) => opt.id === q.answer);
      }
      return q.answer?.trim() !== "";
    });

    console.log({ answeredQuestions });

    const completionPercentage =
      (answeredQuestions.length / questions.length) * 100;

    return Math.round(completionPercentage);
  },
}));
