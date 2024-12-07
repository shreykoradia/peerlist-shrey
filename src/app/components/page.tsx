"use client";

import {
  QuestionEditor,
  QuestionEditorBody,
  QuestionEditorHeader,
} from "@/modules/question-builder/components/question-editor";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { useState } from "react";
import ReorderIcon from "@/assets/icons/reorder.svg";
import QuestionTypeMenu from "@/modules/question-builder/components/menu";
import { MenuOptionProp, RadioGroupOptionProp } from "@/types/types";
import { menuOption } from "@/shared/lib/constant";

export default function Home() {
  const [questionText, setQuestionText] = useState<string>("");
  const [questionDesc, setQuestionDesc] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<MenuOptionProp>(
    menuOption[0] as MenuOptionProp
  );
  const [options, setOptions] = useState<RadioGroupOptionProp[]>([]);

  const addNewRadioOption = (options: RadioGroupOptionProp[]) => {
    setOptions(options);
  };

  return (
    <div className="p-4 flex flex-col gap-4 max-w-screen-sm">
      <Button variant={"default"}>Click Peerlist</Button>
      <Button variant={"outline"}>Click Peerlist</Button>
      <QuestionEditor className="flex flex-col gap-2 w-full">
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
      </QuestionEditor>
    </div>
  );
}
