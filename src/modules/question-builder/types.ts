export type QuestionType = "short" | "long" | "singleSelect" | "number" | "url";

export interface Question {
  id: string;
  type: QuestionType;
  label: string;
  description?: string;
  required?: boolean;
}

export type OnChangeQuestion = (updatedQuestion: Question) => void;
export type OnRemoveQuestion = (id: string) => void;


