import { FormResponseObject } from "@/modules/form-viewer/type";
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

export type QuestionProp = {
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
    createdAt: string | Date;
    updatedAt: string | Date;
  };
  uiState: {
    isFormPublished: boolean;
    isFormInPreview: boolean;
    showBanner: boolean;
  };
  hydrateForm: (formData: FormResponseObject) => void;
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

// API Payload and Response Prop

export type PublishFormPayload = {
  id: string;
  formTitle: string;
  isPublished: boolean;
  questions: Array<{
    id: string;
    questionText: string;
    questionDesc: string;
    type: string;
    selectedOption: {
      value: string;
      label: string;
    };
    radioOptions: Array<{
      id: string;
      value: string;
      isEditable?: boolean;
    }>;
    error?: string;
  }>;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export interface PublishFormProps {
  success: boolean;
  data: Data;
}
export interface Data {
  id: string;
  formTitle: string;
  questions?: QuestionsEntity[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
}
export interface QuestionsEntity {
  id: string;
  questionText: string;
  questionDesc: string;
  type: string;
  selectedOption: SelectedOption;
  radioOptions?: RadioGroupOptionProp[] | null;
}
export interface SelectedOption {
  value: string;
  label: string;
}

export type ErrorResponse = {
  message: string;
};
