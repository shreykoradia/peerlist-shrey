"use client";

import React, { useEffect } from "react";

import { Button } from "@/shared/ui/button";

import DraftIcon from "@/assets/icons/draft.svg";
import CheckIcon from "@/assets/icons/check.svg";
import { useFormStore } from "@/shared/store/form";
import { useRouter } from "next/navigation";

function FormFooter() {
  const navigate = useRouter();

  const form = useFormStore((state) => state.form);
  const publishForm = useFormStore((state) => state.publishForm);
  const toggleShowBanner = useFormStore((state) => state.toggleShowBanner);

  const isFormPublished = useFormStore(
    (state) => state.uiState.isFormPublished
  );

  useEffect(() => {
    if (isFormPublished) {
      navigate.replace(`form/${form.id}`);
    }
  }, [isFormPublished]);

  return (
    <>
      <div className="w-full flex justify-between items-center border-t border-t-secondary-foreground px-6 py-4 bg-secondary">
        <Button disabled variant={"outline"} className="gap-1">
          <DraftIcon />
          Save as draft
        </Button>
        <Button
          variant={"default"}
          className="gap-1"
          onClick={() => {
            if (form.questions.length === 0) {
              toggleShowBanner();
              return;
            }
            publishForm();
          }}
        >
          <CheckIcon className={"mt-0.5"} />
          Publish form
        </Button>
      </div>
    </>
  );
}

export default FormFooter;
