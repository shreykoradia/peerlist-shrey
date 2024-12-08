import React from "react";

import { menuOption, QUESTION_TYPE } from "@/shared/lib/constant";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/shared/ui/select";

import ChevronDownIcon from "@/assets/icons/chevron_down.svg";

import { MenuOptionProp } from "@/types/types";
import clsx from "clsx";

type QuestionTypeMenuProp = {
selectedOption: MenuOptionProp;
  selectedOptionIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  handleOptionChange: (option: string) => void;
};

function QuestionTypeMenu({
  selectedOption,
  selectedOptionIcon: Icon,
  handleOptionChange,
}: QuestionTypeMenuProp) {
  return (
    <>
      <Select
        value={selectedOption.value}
        onValueChange={(value) => handleOptionChange(value)}
      >
        <SelectTrigger className="focus:outline-none">
          <div className="flex items-center">
            <Icon
              className={clsx({
                svg_secondary_stroke_muted:
                  selectedOption.value !== QUESTION_TYPE.SINGLE_SELECT,
                svg_secondary_stroke:
                  selectedOption.value === QUESTION_TYPE.SINGLE_SELECT,
              })}
            />
            <ChevronDownIcon className="svg_secondary_stroke_muted" />
          </div>
        </SelectTrigger>
        <SelectContent className="w-[300px]">
          <SelectGroup>
            <SelectLabel>INPUT TYPES</SelectLabel>
            {menuOption.map(({ label, value, icon: Icon }) => (
              <SelectItem value={value} key={value}>
                <div className="flex gap-2 items-center">
                  <Icon />
                  <p>{label}</p>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default QuestionTypeMenu;
