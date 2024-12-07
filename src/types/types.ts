import { QUESTION_TYPE } from "@/shared/lib/constant";

export type MenuOptionProp = {
  value: (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
