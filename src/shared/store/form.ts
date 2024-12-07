import { FormProp, MenuOptionProp, RadioGroupOptionProp } from "@/types/types";
import { create } from "zustand";
import { menuOption } from "../lib/constant";

export const useFormStore = create<FormProp>((set) => ({
  form: {
    id: crypto.randomUUID(),
    questions: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  uiState: {
    isFormInPreview: false,
    isFormPublished: false,
  },
  addQuestion: () =>
    set((state) => ({
      form: {
        ...state.form,
        questions: [
          ...state.form.questions,
          {
            id: crypto.randomUUID(),
            questionText: "",
            questionDesc: "",
            type: menuOption[0].value,
            selectedOption: menuOption[0] as MenuOptionProp,
            radioOptions: [],
          },
        ],
      },
    })),
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
          quest.id === questionId ? { ...quest, radioOptions: options } : quest
        ),
        updatedAt: new Date(),
      },
    })),
  togglePreviewMode: () =>
    set((state) => ({
      uiState: {
        ...state.uiState,
        isFormInPreviewMode: !state.uiState.isFormInPreview,
      },
    })),
  publishForm: () =>
    set((state) => ({
      uiState: { ...state.uiState, isFormPublished: true },
      form: { ...state.form, updatedAt: new Date() },
    })),
}));
