"use client";

import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import FormFooter from "@/modules/form-builder/components/form-footer";
import FormHeader from "@/modules/form-builder/components/form-header";
import { QuestionEditorBody } from "@/modules/question-builder/components/question-editor";

import { QUESTION_TYPE } from "@/shared/lib/constant";
import { useFormStore } from "@/shared/store/form";
import Label from "@/shared/ui/label";
import PublishedFormHeader from "@/modules/form-builder/components/form-publish-header";
import { Button } from "@/shared/ui/button";
import { FormResponseObject } from "../type";
import { submitFormResponses } from "../api";

type FormPreviewProp = {
  isFormPublished: boolean;
  formData: FormResponseObject;
};

function FormPreview({ isFormPublished, formData }: FormPreviewProp) {
  const uiState = useFormStore((state) => state.uiState);
  const form = useFormStore((state) => state.form);
  const updateQuestion = useFormStore((state) => state.updateQuestion);
  const hydrateForm = useFormStore((state) => state.hydrateForm);
  const toggleSubmit = useFormStore((state) => state.toggleSubmitMode);

  const [isScrollable, setIsScrollable] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleAnswerChange = (questId: string, answer: string) => {
    if (uiState.isFormPublished) {
      updateQuestion(questId, { answer: answer });
    }
  };

  useEffect(() => {
    if (!isFormPublished) {
      return;
    }
    hydrateForm(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsScrollable(container.scrollHeight > container.clientHeight);
    }
  }, [form.questions]);

  return (
    <>
      {isFormPublished ? (
        <PublishedFormHeader />
      ) : (
        <FormHeader isPreviewMode={uiState.isFormInPreview} />
      )}
      <div
        ref={containerRef}
        className={clsx("overflow-y-auto", {
          "h-[calc(100vh_-_3.75rem)]": isFormPublished && !isScrollable,
          "h-[calc(100vh_-_7.5rem)]": !isFormPublished,
        })}
      >
        <div className="p-6 h-full">
          <div className="flex flex-col gap-8 pb-1">
            {form.questions.map((quest) => (
              <div
                className={clsx("flex flex-col gap-1", {
                  "gap-4": quest.type === QUESTION_TYPE.SINGLE_SELECT,
                })}
                key={quest.id}
              >
                <div className="flex flex-col gap-1">
                  <Label
                    variant={"subHeader"}
                    weight={"semiBold"}
                    text={quest.questionText}
                  />
                  {quest?.questionDesc ? (
                    <Label
                      variant={"description"}
                      weight={"normal"}
                      text={quest.questionDesc}
                    />
                  ) : null}
                </div>
                <QuestionEditorBody
                  type={quest.type}
                  options={quest.radioOptions}
                  onAnswerChange={(answer: string) =>
                    handleAnswerChange(quest.id, answer)
                  }
                  isOnlyView={isFormPublished}
                  isInPreview={uiState.isFormInPreview}
                  answer={quest.answer}
                  isSubmitted={uiState.isSubmitted}
                />
              </div>
            ))}
            {isFormPublished && !isScrollable && !uiState.isSubmitted ? (
              <div className="flex justify-end">
                <Button variant={"default"} onClick={() => handleSubmit()}>
                  Submit
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {uiState.isFormPublished && isScrollable ? (
        <div className="flex justify-end m-4">
          <Button variant={"default"}>Submit</Button>
        </div>
      ) : null}
      {!uiState.isFormPublished ? <FormFooter /> : null}
    </>
  );
}

export default FormPreview;
