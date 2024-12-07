import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import PlusIcon from "@/assets/icons/plus.svg";
import { RadioGroupOptionProp } from "@/types/types";

const SingleSelect: React.FC<{
  options?: RadioGroupOptionProp[];
  onOptionsChange?: (updatedOptions: RadioGroupOptionProp[]) => void;
}> = ({ options = [], onOptionsChange }) => {
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
    onOptionsChange && onOptionsChange([...options, newOption]);
  };

  // Update an option's value
  const handleUpdateOption = (id: string, newValue: string) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, value: newValue } : option
    );
    onOptionsChange && onOptionsChange(updatedOptions);
  };

  return (
    <div className="w-full space-y-2">
      <RadioGroup>
        {options.map((option, index) => (
          <div key={option.id} className="flex items-center space-x-2">
            <RadioGroupItem value={option.id} id={option.id} />
            <Input
              id={option.id}
              value={option.value}
              readOnly={!option.isEditable}
              onChange={(e) => handleUpdateOption(option.id, e.target.value)}
              placeholder="Enter option..."
              className="w-full p-1"
            />
            {options.length - 1 === index ? (
              <Button variant={"icon"} size={"icon"} onClick={handleAddOption}>
                <PlusIcon />
              </Button>
            ) : null}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SingleSelect;
