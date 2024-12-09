import { Input } from "@/shared/ui/input";

type NumberInputProp = {
  handleAnswerChange: (answer: string) => void;
  answer?: string;
  isOnlyView?: boolean;
  isInPreview?: boolean;
};

const NumberInput: React.FC<NumberInputProp> = ({
  handleAnswerChange,
  answer,
  isOnlyView,
  isInPreview,
}) => {
  return (
    <Input
      type="number"
      className="h-8 border border-secondary-foreground"
      onChange={(e) => handleAnswerChange(e.target.value)}
      value={answer}
      readOnly={isInPreview}
      disabled={!isInPreview && !isOnlyView}
    />
  );
};

export default NumberInput;
