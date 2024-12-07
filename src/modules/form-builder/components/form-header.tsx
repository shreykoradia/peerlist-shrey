"use client";

import React from "react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useFormStore } from "@/shared/store/form";

import OpenIcon from "@/assets/icons/open.svg";

function FormHeader() {
  const form = useFormStore((state) => state.form);
  const updateFormTitle = useFormStore((state) => state.updateFormTitle);

  console.log({ line14: form });

  return (
    <>
      <div className="px-6 w-full py-4 border-b border-b-secondary-foreground flex items-center justify-between">
        <Input
          value={form.formTitle}
          onChange={(e) => updateFormTitle(form.id, e.target.value)}
          className="font-semibold text-base w-2/3"
        />
        <Button variant={"outline"} className="gap-1">
          Preview
          <OpenIcon className="mt-0.5" />
        </Button>
      </div>
    </>
  );
}

export default FormHeader;
