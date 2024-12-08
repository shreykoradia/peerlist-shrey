import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium shadow-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-primary rounded-xl border border-accent-foreground",

        outline:
          "bg-primary text-primary-dark border border-secondary-foreground",

        icon: "hover:text-accent focus:outline-none focus:ring-0",
      },
      size: {
        default: "h-8 py-1.5 rounded-xl pr-4 pl-[0.875rem]",
        sm: "h-7 px-3 rounded-md",
        lg: "h-10 px-8 rounded-md",
        icon: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
