import { Input } from "@/shared/ui/input";

type URLInputProp = {
  handleAnswerChange: (answer: string) => void;
};

const URLInput: React.FC<URLInputProp> = ({ handleAnswerChange }) => {
  return (
    <Input
      type="url"
      className="h-8 border border-secondary-foreground"
      onChange={(e) => handleAnswerChange(e.target.value)}
    />
  );
};

export default URLInput;
