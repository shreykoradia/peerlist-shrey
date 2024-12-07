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
import { MenuOptionProp } from "@/types/types";

export default function Home() {
  const [questionText, setQuestionText] = useState<string>("");
  const [questionDesc, setQuestionDesc] = useState<string>("");

  return (
    <div className="p-4 flex gap-4">
      <Button variant={"default"}>Click Peerlist</Button>
      <Button variant={"outline"}>Click Peerlist</Button>
      <QuestionEditor>
        <QuestionEditorHeader>
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="w-full">
              <Input
                type="text"
                name="label"
                className="text-sm font-semibold"
                value={questionText || ""}
                placeholder="Write a question..."
                onChange={(e) => setQuestionText(e.target.value)}
              />
              <Input
                type="text"
                name="description"
                className="text-xs font-normal"
                value={questionDesc || ""}
                placeholder="Write a question description..."
                onChange={(e) => setQuestionDesc(e.target.value)}
              />
            </div>
            <div className="flex justify-end items-center w-full">
              <QuestionTypeMenu
                selectedOption={{} as MenuOptionProp}
                selectedOptionIcon={null}
                handleOptionChange={() => {}}
              />
              <Button variant={"icon"} size={"icon"}>
                <ReorderIcon />
              </Button>
            </div>
          </div>
        </QuestionEditorHeader>
        <QuestionEditorBody></QuestionEditorBody>
      </QuestionEditor>
    </div>
  );
}
