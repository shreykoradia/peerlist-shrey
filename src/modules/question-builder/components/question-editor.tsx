import React from "react";
import { cn } from "@/shared/lib/tailwind-merge";

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
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-xs font-normal", className)} {...props} />
));
QuestionEditorBody.displayName = "QuestionEditorBody";

export { QuestionEditor, QuestionEditorHeader, QuestionEditorBody };
