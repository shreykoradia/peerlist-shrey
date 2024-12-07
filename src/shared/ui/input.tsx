import * as React from "react";
import { cn } from "../lib/tailwind-merge";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg bg-background focus:outline-1 focus:outline-secondary focus:shadow-sm disabled:cursor-not-allowed disabled:bg-secondary-disabled",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };