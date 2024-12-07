import clsx from "clsx";

import { menuOption } from "@/shared/lib/constant";
import { buttonVariants } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/shared/ui/select";

import PlusIcon from "@/assets/icons/plus.svg";

type AddQuestionMenuProp = {
  handleOptionChange: (value: string) => void;
};

function AddQuestionMenu({ handleOptionChange }: AddQuestionMenuProp) {
  return (
    <>
      <Select onValueChange={(value) => handleOptionChange(value)}>
        <SelectTrigger
          className={clsx(
            "gap-1",
            buttonVariants({ variant: "outline", size: "default" })
          )}
        >
          <PlusIcon className="my-1" />
          Add Question
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

export default AddQuestionMenu;
