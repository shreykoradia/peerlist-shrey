import React from "react";
import { cn } from "@/shared/lib/tailwind-merge";
import ShortAnswer from "./short-answer";
import LongAnswer from "./long-answer";
import URLInput from "./url-input";
import DateInput from "./date-input";
import SingleSelect from "./single-select";
import { QUESTION_TYPE } from "@/shared/lib/constant";
import { RadioGroupOptionProp } from "@/types/types";

const QuestionEditor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-background border border-secondary-foreground shadow-sm p-4",
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
    value: string;
    onChange: (value: string) => void;
    options?: RadioGroupOptionProp[];
    onOptionsChange?: (updatedOptions: RadioGroupOptionProp[]) => void;
  }
>(
  (
    {
      className,
      type,
      value,
      onChange,
      options = [],
      onOptionsChange,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("text-xs font-normal", className)}
        {...props}
      >
        {type === "short" && <ShortAnswer value={value} onChange={onChange} />}
        {type === "long" && <LongAnswer value={value} onChange={onChange} />}
        {type === "url" && <URLInput value={value} onChange={onChange} />}
        {type === "date" && <DateInput value={value} onChange={onChange} />}
        {type === "singleSelect" && (
          <SingleSelect
            value={value}
            onChange={onChange}
            options={options}
            onOptionsChange={onOptionsChange}
          />
        )}
      </div>
    );
  }
);
QuestionEditorBody.displayName = "QuestionEditorBody";

export { QuestionEditor, QuestionEditorHeader, QuestionEditorBody };
