import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";

import PlusIcon from "@/assets/icons/plus.svg";
import { RadioGroupOptionProp } from "@/types/types";
import Label from "@/shared/ui/label";

type SingleSelectProp = {
  options?: RadioGroupOptionProp[];
  onOptionsChange?: (updatedOptions: RadioGroupOptionProp[]) => void;
  handleAnswerChange: (answer: string) => void;
  isOnlyView: boolean;
};

const SingleSelect: React.FC<SingleSelectProp> = ({
  options = [],
  onOptionsChange,
  isOnlyView,
  handleAnswerChange,
}) => {
  //  i might give two initial options for better ux
  if (options.length < 2) {
    options = [
      { id: crypto.randomUUID(), value: "hire me !", isEditable: true },
      {
        id: crypto.randomUUID(),
        value: "we will build great things together",
        isEditable: true,
      },
    ];
  }

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

  return (
    <div className="w-full space-y-2">
      <RadioGroup onValueChange={(value) => handleAnswerChange(value)}>
        {options.map((option, index) => (
          <div key={option.id} className="flex items-center space-x-2">
            <RadioGroupItem value={option.id} id={option.id} />
            {isOnlyView ? (
              <Label text={option.value} />
            ) : (
              <>
                <Input
                  id={option.id}
                  value={option.value}
                  readOnly={!option.isEditable}
                  onChange={(e) =>
                    handleUpdateOption(option.id, e.target.value)
                  }
                  placeholder="Enter option..."
                  className="w-full p-1 text-sm font-normal"
                />
                {options.length - 1 === index ? (
                  <button onClick={handleAddOption}>
                    <PlusIcon />
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
