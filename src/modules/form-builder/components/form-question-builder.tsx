import QuestionTypeMenu from "@/modules/question-builder/components/menu";
import {
  QuestionEditor,
  QuestionEditorBody,
  QuestionEditorHeader,
} from "@/modules/question-builder/components/question-editor";
import { useFormStore } from "@/shared/store/form";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import PlusIcon from "@/assets/icons/plus.svg";
import React from "react";

function FormQuestionBuilder() {
  const form = useFormStore((state) => state.form);

  return (
    <div className="p-6 h-full">
      {form.questions.length === 0 ? (
        <div className="w-full flex justify-center">
          <Button variant={"outline"} className="gap-1">
            <PlusIcon className="my-1" />
            Add Question
          </Button>
        </div>
      ) : null}
      {/* <QuestionEditor className="flex flex-col gap-2 w-full">
        <QuestionEditorHeader>
          <div className="flex items-center gap-2 w-full">
            <div className="w-full">
              <Input
                type="text"
                name="label"
                className="text-sm font-semibold p-1"
                value={questionText || ""}
                placeholder="Write a question..."
                onChange={(e) => setQuestionText(e.target.value)}
              />
              <Input
                type="text"
                name="description"
                className="text-xs font-normal p-1"
                value={questionDesc || ""}
                placeholder="Write a question description..."
                onChange={(e) => setQuestionDesc(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <QuestionTypeMenu
                selectedOption={selectedOption}
                selectedOptionIcon={selectedOption.icon}
                handleOptionChange={(option) => {
                  const selectedOption =
                    menuOption.find((opt) => opt.value === option) ||
                    ({} as MenuOptionProp);
                  setSelectedOption(selectedOption);
                }}
              />
              <Button variant={"icon"} size={"icon"}>
                <ReorderIcon />
              </Button>
            </div>
          </div>
        </QuestionEditorHeader>
        <QuestionEditorBody
          type={selectedOption.value}
          options={
            selectedOption.value === "singleSelect" ? options : undefined
          }
          onOptionsChange={
            selectedOption.value === "singleSelect"
              ? (options) => addNewRadioOption(options)
              : undefined
          }
        />
      </QuestionEditor> */}
    </div>
  );
}

export default FormQuestionBuilder;
