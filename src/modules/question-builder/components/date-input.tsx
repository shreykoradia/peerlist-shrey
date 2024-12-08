import { Input } from "@/shared/ui/input";

type DateInputProp = {
  handleAnswerChange: (answer: string) => void;
};

const DateInput: React.FC<DateInputProp> = ({ handleAnswerChange }) => {
  return (
    <Input
      type="date"
      className="h-8 border border-secondary-foreground"
      onChange={(e) => handleAnswerChange(e.target.value)}
    />
  );
};

export default DateInput;
