import { Textarea } from "@/shared/ui/textarea";

type LongAnswerProp = {
  handleAnswerChange: (answer: string) => void;
  answer?: string;
  isOnlyView?: boolean;
  isInPreview?: boolean;
};

const LongAnswer: React.FC<LongAnswerProp> = ({
  handleAnswerChange,
  answer,
  isOnlyView,
  isInPreview,
}) => {
  return (
    <Textarea
      maxLength={500}
      className="resize-none h-20"
      onChange={(e) => handleAnswerChange(e.target.value)}
      value={answer || ""}
      readOnly={isInPreview}
      disabled={!isInPreview && !isOnlyView}
    />
  );
};

export default LongAnswer;
