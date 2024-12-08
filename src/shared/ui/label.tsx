import React from "react";
import { cn } from "../lib/tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const labelVariants = cva("text-primary-dark", {
  variants: {
    variant: {
      header: "text-base",
      subHeader: "text-sm",
      description: "text-xs",
    },
    weight: {
      semiBold: "font-semibold",
      medium: "font-medium",
      normal: "font-normal",
    },
    defaultVariants: {
      variant: "header",
      weight: "semiBold",
    },
  },
});

interface LabelProps extends VariantProps<typeof labelVariants> {
  text: string;
  className?: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({
  text,
  className,
  htmlFor,
  variant,
  weight,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(labelVariants({ variant, weight }), className)}
    >
      {text}
    </label>
  );
};

export default Label;
