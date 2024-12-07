import React from "react";
import { menuOption } from "@/shared/lib/constant";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/shared/ui/select";
import { MenuOptionProp } from "@/types/types";

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
        <SelectTrigger className="w-auto">{<Icon />}</SelectTrigger>
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
