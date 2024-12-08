import { cva, VariantProps } from "class-variance-authority";

import CancelIcon from "@/assets/icons/cancel.svg";

import { cn } from "../lib/tailwind-merge";
import { Button } from "./button";

const bannerVaraints = cva(
  "fixed z-50 px-4 py-2 border rounded-lg shadow-md flex items-center text-balance justify-between w-[300px] max-w-full transition duration-300 ease-in-out focus:outline-none outline-none",
  {
    variants: {
      variant: {
        success: "bg-accent text-primary border-accent-foreground",
        error:
          "bg-destructive text-primary border-destructive border-opacity-50",
      },
      position: {
        "top-right": "top-4 right-4",
      },
      defaultVariants: {
        varaiant: "success",
        position: "top",
      },
    },
  }
);

interface BannerProp extends VariantProps<typeof bannerVaraints> {
  bannerMessage: string;
  onClose?: () => void;
  className?: string;
}

const Banner: React.FC<BannerProp> = ({
  bannerMessage,
  className,
  onClose,
  variant,
  position,
}) => {
  return (
    <div className={cn(bannerVaraints({ variant, position }), className)}>
      <span>{bannerMessage}</span>
      <Button variant={"icon"} size={"icon"} onClick={onClose}>
        <CancelIcon />
      </Button>
    </div>
  );
};

export default Banner;
