import { Input } from "@/shared/ui/input";

type NumberInputProp = {
  handleAnswerChange: (answer: string) => void;
};

const NumberInput: React.FC<NumberInputProp> = ({ handleAnswerChange }) => {
  return (
    <Input
      type="number"
      className="h-8 border border-secondary-foreground"
      onChange={(e) => handleAnswerChange(e.target.value)}
    />
  );
};

export default NumberInput;
