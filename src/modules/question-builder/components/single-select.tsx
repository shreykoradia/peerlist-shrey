import clsx from "clsx";

import { Input } from "@/shared/ui/input";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import Label from "@/shared/ui/label";

import PlusIcon from "@/assets/icons/plus.svg";
import DeleteIcon from "@/assets/icons/delete.svg";

import { RadioGroupOptionProp } from "@/types/types";
import { Button } from "@/shared/ui/button";

type SingleSelectProp = {
  options?: RadioGroupOptionProp[];
  onOptionsChange?: (updatedOptions: RadioGroupOptionProp[]) => void;
  handleAnswerChange: (answer: string) => void;
  isOnlyView: boolean;
  isError: boolean;
};

const SingleSelect: React.FC<SingleSelectProp> = ({
  options = [],
  onOptionsChange,
  isOnlyView,
  handleAnswerChange,
  isError,
}) => {
  // Function to add a new option
  const handleAddOption = () => {
    const newOption: RadioGroupOptionProp = {
      id: `option-${options.length + 1}`,
      value: "",
      isEditable: true,
    };
    if (onOptionsChange) {
      onOptionsChange([...options, newOption]);
    }
  };

  // Update an option's value
  const handleUpdateOption = (id: string, newValue: string) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, value: newValue } : option
    );
    if (onOptionsChange) {
      onOptionsChange(updatedOptions);
    }
  };

  // delete an option value
  const handleDeleteOption = (id: string) => {
    const updatedOption = options.filter((option) => option.id !== id);
    if (onOptionsChange) {
      onOptionsChange(updatedOption);
    }
  };

  return (
    <div className="w-full space-y-2">
      <RadioGroup onValueChange={(value) => handleAnswerChange(value)}>
        {!isOnlyView && options.length === 0 ? (
          <Button
            variant={"default"}
            className="gap-1"
            onClick={handleAddOption}
          >
            <PlusIcon className="svg_secondary_fill_white" /> Add Option
          </Button>
        ) : null}
        {options.map((option, index) => (
          <div key={option.id} className="flex items-center space-x-2">
            <RadioGroupItem value={option.id} id={option.id} />
            {isOnlyView ? (
              <Label
                variant={"subHeader"}
                weight={"medium"}
                text={option.value}
              />
            ) : (
              <>
                <div className="relative w-full">
                  <Input
                    id={option.id}
                    value={option.value}
                    readOnly={!option.isEditable}
                    onChange={(e) =>
                      handleUpdateOption(option.id, e.target.value)
                    }
                    placeholder="Enter option..."
                    className={clsx("w-full p-1 text-sm font-normal", {
                      "placeholder:text-destructive": isError,
                    })}
                  />
                  <button
                    className="absolute right-0 top-1.5"
                    onClick={() => handleDeleteOption(option.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                {options.length - 1 === index ? (
                  <button onClick={handleAddOption}>
                    <PlusIcon className="svg_secondary_fill_black" />
                  </button>
                ) : null}
              </>
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SingleSelect;
