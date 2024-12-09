"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/ui/button";

import DraftIcon from "@/assets/icons/draft.svg";
import CheckIcon from "@/assets/icons/check.svg";
import { useFormStore } from "@/shared/store/form";
import AddQuestionMenu from "./menu";
import clsx from "clsx";
import { postPublishForm } from "../api";
import { PublishFormPayload } from "@/types/types";

type FormFooterProp = {
  isScrollable?: boolean;
};

function FormFooter({ isScrollable }: FormFooterProp) {
  const navigate = useRouter();

  const form = useFormStore((state) => state.form);
  const addQuestion = useFormStore((state) => state.addQuestion);
  const uiState = useFormStore((state) => state.uiState);
  const publishForm = useFormStore((state) => state.publishForm);
  const toggleShowBanner = useFormStore((state) => state.toggleShowBanner);

  const handlePublishedForm = async () => {
    publishForm();
    const formPayload: PublishFormPayload = {
      id: form.id,
      questions: form.questions,
      isPublished: true,
      formTitle: form.formTitle,
      createdAt: form.createdAt,
      updatedAt: form.updatedAt,
    };

    const response = await postPublishForm(formPayload);

    if (response.success === true) {
      navigate.replace(`form/${response.data.id}`);
    } else {
      console.error("Failed to publish form:", response);
    }
  };

  return (
    <>
      <div className="w-full flex-wrap flex justify-between items-center border-t border-t-secondary-foreground px-6 py-4 bg-secondary">
        <Button disabled variant={"outline"} className="gap-1">
          <DraftIcon className="mt-0.5" />
          Save as draft
        </Button>
        {isScrollable && !uiState.isFormInPreview ? (
          <AddQuestionMenu handleOptionChange={(value) => addQuestion(value)} />
        ) : null}
        <Button
          variant={"default"}
          className={clsx("gap-1", {
            " maxMd:flex-1 maxMd:mt-2": isScrollable,
          })}
          onClick={() => {
            if (form.questions.length === 0) {
              toggleShowBanner();
              return;
            }
            handlePublishedForm();
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
