"use client";

import React, { memo, useEffect, useRef } from "react";

import clsx from "clsx";

import QuestionTypeMenu from "@/modules/question-builder/components/menu";
import {
  QuestionEditor,
  QuestionEditorBody,
  QuestionEditorHeader,
} from "@/modules/question-builder/components/question-editor";

import { useFormStore } from "@/shared/store/form";
import { Input } from "@/shared/ui/input";
import { menuOption, QUESTION_TYPE } from "@/shared/lib/constant";

import ReorderIcon from "@/assets/icons/reorder.svg";

import { MenuOptionProp } from "@/types/types";

import AddQuestionMenu from "./menu";

type FormQuestionBuilderProp = {
  isScrollable?: boolean;
};

function FormQuestionBuilder({
  isScrollable = false,
}: FormQuestionBuilderProp) {
  const form = useFormStore((state) => state.form);
  const addQuestion = useFormStore((state) => state.addQuestion);
  const updateQuestion = useFormStore((state) => state.updateQuestion);
  const updateRadioOption = useFormStore((state) => state.updateRadioOption);

  return (
    <div className="p-6 h-full">
      {form.questions.length === 0 ? (
        <div className="w-full flex justify-center">
          <AddQuestionMenu handleOptionChange={(value) => addQuestion(value)} />
        </div>
      ) : (
        <div className="flex flex-col gap-4 pb-1">
          {form.questions.map((quest, index) => (
            <React.Fragment key={quest.id}>
              <QuestionEditor
                key={quest.id}
                className={clsx("flex flex-col gap-2 w-full", {
                  "border-destructive": quest.error,
                })}
              >
                <QuestionEditorHeader>
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-full">
                      <Input
                        type="text"
                        name="questionText"
                        className={clsx(
                          "text-sm font-semibold mb-1 !p-0 !pl-1",
                          { "placeholder:text-destructive": quest.error }
                        )}
                        value={quest.questionText}
                        placeholder="Write a question..."
                        onChange={(e) =>
                          updateQuestion(quest.id, {
                            error: "",
                            questionText: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="text"
                        name="description"
                        className="text-xs font-normal !p-0 !pl-1"
                        value={quest.questionDesc}
                        placeholder="Write a question description..."
                        onChange={(e) =>
                          updateQuestion(quest.id, {
                            questionDesc: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <QuestionTypeMenu
                        selectedOption={quest.selectedOption}
                        selectedOptionIcon={quest.selectedOption.icon}
                        handleOptionChange={(option) => {
                          const selectedOption =
                            menuOption.find((opt) => opt.value === option) ||
                            ({} as MenuOptionProp);
                          updateQuestion(quest.id, {
                            error: "",
                            type: selectedOption.value,
                            selectedOption: selectedOption,
                          });
                        }}
                      />
                      <ReorderIcon className="svg_secondary_stroke_muted" />
                    </div>
                  </div>
                </QuestionEditorHeader>
                <QuestionEditorBody
                  type={quest.type}
                  options={
                    quest.type === QUESTION_TYPE.SINGLE_SELECT
                      ? quest.radioOptions
                      : undefined
                  }
                  onOptionsChange={
                    quest.type === QUESTION_TYPE.SINGLE_SELECT
                      ? (options) => updateRadioOption(quest.id, options)
                      : undefined
                  }
                  isError={
                    quest.type === QUESTION_TYPE.SINGLE_SELECT && quest?.error
                      ? true
                      : false
                  }
                />
              </QuestionEditor>
              {!isScrollable && form.questions.length - 1 === index ? (
                <div className="w-full flex justify-center pb-2">
                  <AddQuestionMenu
                    handleOptionChange={(value) => addQuestion(value)}
                  />
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(FormQuestionBuilder);
