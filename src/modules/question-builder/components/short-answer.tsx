import { Textarea } from "@/shared/ui/textarea";

type ShortAnswerProp = {
  handleAnswerChange: (answer: string) => void;
  answer?: string;
  isOnlyView?: boolean;
  isInPreview?: boolean;
};

const ShortAnswer: React.FC<ShortAnswerProp> = ({
  handleAnswerChange,
  answer,
  isOnlyView,
  isInPreview,
}) => {
  return (
    <Textarea
      maxLength={150}
      className="resize-none max-h-8"
      onChange={(e) => handleAnswerChange(e.target.value)}
      value={answer || ""}
      readOnly={isInPreview}
      disabled={!isInPreview && !isOnlyView}
    />
  );
};

export default ShortAnswer;
