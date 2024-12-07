import React from "react";
import { menuOption } from "@/shared/lib/constant";
import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/shared/ui/select";
import { MenuOptionProp } from "@/types/types";

type QuestionTypeMenuProp = {
  selectedOption: MenuOptionProp;
  selectedOptionIcon: React.FC<React.SVGProps<SVGSVGElement>> | null;
  handleOptionChange: (option: MenuOptionProp) => void;
};

function QuestionTypeMenu({
  selectedOption,
  selectedOptionIcon: Icon,
  handleOptionChange,
}: QuestionTypeMenuProp) {
  return (
    <>
      <Select open={true} value={selectedOption.value}>
        <SelectTrigger className="w-auto">
          {Icon ? (
            <Button variant={"icon"} size={"icon"}>
              {<Icon />}
            </Button>
          ) : (
            "open"
          )}
        </SelectTrigger>
        <SelectContent>
          <SelectLabel>Input types</SelectLabel>
          {menuOption.map(({ label, value, icon: Icon }) => (
            <SelectItem value={value} key={value}>
              <div className="flex gap-2 items-center">
                <Icon />
                <p>{label}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export default QuestionTypeMenu;
