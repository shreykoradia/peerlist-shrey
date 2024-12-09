"use client";

import React from "react";

import Label from "@/shared/ui/label";
import { Progress } from "@/shared/ui/progress";
import { useFormStore } from "@/shared/store/form";

function PublishedFormHeader() {
  const getFormCompletion = useFormStore((state) => state.getFormCompletion);

  const completionPercentage = getFormCompletion();

  console.log({ completionPercentage });

  return (
    <>
      <div className="px-6 py-4 w-full border-b border-b-secondary-foreground flex items-center justify-between">
        <Label
          className="whitespace-nowrap"
          variant={"header"}
          weight={"semiBold"}
          text="Submit form"
        />
        <div className="flex flex-col gap-2 items-end w-1/2">
          <Label
            variant={"subHeader"}
            weight={"normal"}
            className="whitespace-nowrap"
            text={`Form completeness - ${completionPercentage}%`}
          />
          <Progress
            value={completionPercentage}
            className="w-full border border-secondary-foreground"
          />
        </div>
      </div>
    </>
  );
}

export default PublishedFormHeader;
