"use client";

import React from "react";

import { useFormStore } from "@/shared/store/form";
import { Button } from "@/shared/ui/button";
import { submitFormResponses } from "@/modules/form-viewer/api";

function PlubishFormFooter() {
  const form = useFormStore((state) => state.form);
  const toggleSubmit = useFormStore((state) => state.toggleSubmitMode);

  const handleSubmit = async () => {
    const payload = {
      formId: form.id,
      responses: form.questions.reduce(
        (acc, question) => ({
          ...acc,
          [question.id]: question.answer,
        }),
        {}
      ),
    };

    const response = await submitFormResponses(
      payload.formId,
      payload.responses
    );

    if (response.success === true) {
      toggleSubmit();
    }
  };

  return (
    <>
      <div className="w-full border-t border-t-secondary-foreground flex justify-end px-6 py-4 bg-secondary">
        <Button variant={"default"} type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default PlubishFormFooter;
