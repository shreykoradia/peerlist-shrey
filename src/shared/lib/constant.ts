import ShortAnswerIcon from "@/assets/icons/short_answer.svg";
import LongAnswerIcon from "@/assets/icons/long_answer.svg";
import UrlIcon from "@/assets/icons/url.svg";
import DateIcon from "@/assets/icons/date.svg";
import SingleSelectIcon from "@/assets/icons/single_select.svg";
import { MenuOptionProp } from "@/types/types";

export const QUESTION_TYPE = {
  SHORT_ANSWER: "short",
  LONG_ANSWER: "long",
  URL: "url",
  NUMBER: "number",
  DATE: "date",
  SINGLE_SELECT: "singleSelect",
};

export const menuOption: MenuOptionProp[] = [
  {
    value: QUESTION_TYPE.SHORT_ANSWER,
    label: "Short Answer",
    icon: ShortAnswerIcon,
  },
  {
    value: QUESTION_TYPE.LONG_ANSWER,
    label: "Long Answer",
    icon: LongAnswerIcon,
  },
  {
    value: QUESTION_TYPE.URL,
    label: "Url",
    icon: UrlIcon,
  },

  {
    value: QUESTION_TYPE.SINGLE_SELECT,
    label: "Single Select",
    icon: SingleSelectIcon,
  },
  {
    value: QUESTION_TYPE.DATE,
    label: "Date",
    icon: DateIcon,
  },
];
