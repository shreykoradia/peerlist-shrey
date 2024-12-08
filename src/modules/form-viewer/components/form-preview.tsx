"use client";

import React from "react";

import clsx from "clsx";

import FormFooter from "@/modules/form-builder/components/form-footer";
import FormHeader from "@/modules/form-builder/components/form-header";
import { QuestionEditorBody } from "@/modules/question-builder/components/question-editor";

import { QUESTION_TYPE } from "@/shared/lib/constant";
import { useFormStore } from "@/shared/store/form";
import Label from "@/shared/ui/label";
import PublishedFormHeader from "@/modules/form-builder/components/form-publish-header";
import PlubishFormFooter from "@/modules/form-builder/components/form-publish-footer";
import { Button } from "@/shared/ui/button";

function FormPreview() {
  const uiState = useFormStore((state) => state.uiState);
  const form = useFormStore((state) => state.form);
  const updateQuestion = useFormStore((state) => state.updateQuestion);

  const handleAnswerChange = (questId: string, answer: string) => {
    if (uiState.isFormPublished) {
      updateQuestion(questId, { answer: answer });
    }
  };
  return (
    <>
      {uiState.isFormPublished ? (
        <PublishedFormHeader />
      ) : (
        <FormHeader isPreviewMode={uiState.isFormInPreview} />
      )}
      <div className="h-[calc(100vh_-_7.5rem)] overflow-y-auto">
        <div className="p-6 h-full">
          <div className="flex flex-col gap-8">
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
                  isOnlyView={
                    uiState.isFormPublished || uiState.isFormInPreview
                  }
                />
              </div>
            ))}
            {uiState.isFormPublished ? (
              <div className="flex justify-end">
                <Button variant={"default"}>Submit</Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {!uiState.isFormPublished ? <FormFooter /> : null}
    </>
  );
}

export default FormPreview;
