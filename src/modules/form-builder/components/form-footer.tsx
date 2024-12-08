"use client";

import React from "react";

import { Button } from "@/shared/ui/button";

import DraftIcon from "@/assets/icons/draft.svg";
import CheckIcon from "@/assets/icons/check.svg";

function FormFooter() {
  return (
    <>
      <div className="w-full flex justify-between items-center border-t border-t-secondary-foreground px-6 py-4 bg-secondary">
        <Button disabled variant={"outline"} className="gap-1">
          <DraftIcon />
          Save as draft
        </Button>
        <Button variant={"default"} className="gap-1">
          <CheckIcon className={"mt-0.5"} />
          Publish form
        </Button>
      </div>
    </>
  );
}

export default FormFooter;
