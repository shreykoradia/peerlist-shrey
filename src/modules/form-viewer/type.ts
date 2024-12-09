import { QuestionProp } from "@/types/types";

type Form = {
  id: string;
  questions: QuestionProp[] | null | undefined;
  formTitle: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

type UIState = {
  isFormPublished: boolean;
  isFormInPreview: boolean;
  showBanner: {
    message: string;
    show: boolean;
    variant: string;
  };
};

export type FormResponseObject = {
  form: Form;
  uiState: UIState;
};
