import React from "react";
import { cn } from "@/shared/lib/tailwind-merge";
import ShortAnswer from "./short-answer";
import LongAnswer from "./long-answer";
import URLInput from "./url-input";
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
    answer?: string;
    options?: RadioGroupOptionProp[];
    onOptionsChange?: (updatedOptions: RadioGroupOptionProp[]) => void;
    onAnswerChange?: (answer: string) => void;
    isOnlyView?: boolean;
    isError?: boolean;
    isInPreview?: boolean;
    isSubmitted?: boolean;
  }
>(
  (
    {
      className,
      type,
      options = [],
      onAnswerChange,
      onOptionsChange,
      isOnlyView = false,
      isError = false,
      answer,
      isInPreview,
      isSubmitted,
      ...props
    },
    ref
  ) => {
    const handleAnswerChange = (answer: string) => {
      if (onAnswerChange) {
        onAnswerChange(answer);
      }
    };
    return (
      <div
        ref={ref}
        className={cn("text-xs font-normal", className)}
        {...props}
      >
        {type === QUESTION_TYPE.SHORT_ANSWER && (
          <ShortAnswer
            handleAnswerChange={(answer: string) => handleAnswerChange(answer)}
            answer={answer}
            isOnlyView={isOnlyView}
            isInPreview={isInPreview || isSubmitted}
          />
        )}
        {type === QUESTION_TYPE.LONG_ANSWER && (
          <LongAnswer
            handleAnswerChange={(answer: string) => handleAnswerChange(answer)}
            answer={answer}
            isOnlyView={isOnlyView}
            isInPreview={isInPreview || isSubmitted}
          />
        )}
        {type === QUESTION_TYPE.URL && (
          <URLInput
            handleAnswerChange={(answer: string) => handleAnswerChange(answer)}
            answer={answer}
            isOnlyView={isOnlyView}
            isInPreview={isInPreview || isSubmitted}
          />
        )}
        {type === QUESTION_TYPE.NUMBER && (
          <NumberInput
            handleAnswerChange={(answer: string) => handleAnswerChange(answer)}
            answer={answer}
            isOnlyView={isOnlyView}
            isInPreview={isInPreview || isSubmitted}
          />
        )}
        {/* {type === QUESTION_TYPE.DATE && (
          <DateInput
            handleAnswerChange={(answer: string) => handleAnswerChange(answer)}
          />
        )} */}
        {type === QUESTION_TYPE.SINGLE_SELECT && (
          <SingleSelect
            options={options}
            onOptionsChange={onOptionsChange}
            handleAnswerChange={(answer: string) => handleAnswerChange(answer)}
            isOnlyView={isOnlyView}
            isError={isError}
            isInPreview={isInPreview || isSubmitted}
          />
        )}
      </div>
    );
  }
);
QuestionEditorBody.displayName = "QuestionEditorBody";

export { QuestionEditor, QuestionEditorHeader, QuestionEditorBody };
