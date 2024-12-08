import React from "react";
import { cn } from "@/shared/lib/tailwind-merge";
import ShortAnswer from "./short-answer";
import LongAnswer from "./long-answer";
import URLInput from "./url-input";
import DateInput from "./date-input";
import SingleSelect from "./single-select";
import { QUESTION_TYPE } from "@/shared/lib/constant";
import { RadioGroupOptionProp } from "@/types/types";
import NumberInput from "./number-input";

const QuestionEditor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-background border border-secondary-foreground shadow-sm p-4 hover:bg-secondary-light",
      className
    )}
    {...props}
  />
));
QuestionEditor.displayName = "QuestionEditor";

const QuestionEditorHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
QuestionEditorHeader.displayName = "QuestionEditorHeader";

const QuestionEditorBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type: (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];
    options?: RadioGroupOptionProp[];
    onOptionsChange?: (updatedOptions: RadioGroupOptionProp[]) => void;
  }
>(({ className, type, options = [], onOptionsChange, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("text-xs font-normal", className)} {...props}>
      {type === QUESTION_TYPE.SHORT_ANSWER && <ShortAnswer />}
      {type === QUESTION_TYPE.LONG_ANSWER && <LongAnswer />}
      {type === QUESTION_TYPE.URL && <URLInput />}
      {type === QUESTION_TYPE.NUMBER && <NumberInput />}
      {type === QUESTION_TYPE.DATE && <DateInput />}
      {type === QUESTION_TYPE.SINGLE_SELECT && (
        <SingleSelect options={options} onOptionsChange={onOptionsChange} />
      )}
    </div>
  );
});
QuestionEditorBody.displayName = "QuestionEditorBody";

export { QuestionEditor, QuestionEditorHeader, QuestionEditorBody };
