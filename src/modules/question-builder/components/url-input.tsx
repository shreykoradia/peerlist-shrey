import { Input } from "@/shared/ui/input";

type URLInputProp = {
  handleAnswerChange: (answer: string) => void;
  answer?: string;
  isOnlyView?: boolean;
  isInPreview?: boolean;
};

const URLInput: React.FC<URLInputProp> = ({
  handleAnswerChange,
  answer,
  isOnlyView,
  isInPreview,
}) => {
  return (
    <Input
      type="url"
      className="h-8 border border-secondary-foreground"
      onChange={(e) => handleAnswerChange(e.target.value)}
      value={answer || ""}
      readOnly={isInPreview}
      disabled={!isInPreview && !isOnlyView}
    />
  );
};

export default URLInput;
