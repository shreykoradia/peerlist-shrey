import * as React from "react";
import { cn } from "../lib/tailwind-merge";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full rounded-md bg-background focus:outline-1 focus:outline-secondary focus:shadow-sm disabled:cursor-not-allowed  disabled:bg-secondary-disabled",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
