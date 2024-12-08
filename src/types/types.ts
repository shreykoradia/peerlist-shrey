import { QUESTION_TYPE } from "@/shared/lib/constant";

export type MenuOptionProp = {
  value: (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type RadioGroupOptionProp = {
  id: string;
  value: string;
  isEditable?: boolean;
};

type QuestionProp = {
  id: string;
  questionText: string;
  questionDesc: string;
  type: (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];
  selectedOption: MenuOptionProp;
  radioOptions: RadioGroupOptionProp[];
  error?: string;
  answer?: string;
};

export type FormProp = {
  form: {
    id: string;
    formTitle: string;
    questions: QuestionProp[];
    createdAt: Date;
    updatedAt: Date;
  };
  uiState: {
    isFormPublished: boolean;
    isFormInPreview: boolean;
    showBanner: boolean;
  };
  validateQuestions: () => boolean;
  updateFormTitle: (formId: string, title: string) => void;
  addQuestion: (
    type: (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE]
  ) => void;
  removeQuestion: (id: string) => void;
  updateQuestion: (id: string, updatedProps: Partial<QuestionProp>) => void;
  updateRadioOption: (
    questionId: string,
    options: QuestionProp["radioOptions"]
  ) => void;
  togglePreviewMode: () => void;
  publishForm: () => void;
  toggleShowBanner: () => void;
  reorderQuestions: (sourceIndex: number, destinationIndex: number) => void;
};
