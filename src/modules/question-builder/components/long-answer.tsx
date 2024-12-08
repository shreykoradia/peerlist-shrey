import { Textarea } from "@/shared/ui/textarea";

type LongAnswerProp = {
  handleAnswerChange: (answer: string) => void;
};

const LongAnswer: React.FC<LongAnswerProp> = ({ handleAnswerChange }) => {
  return (
    <Textarea
      maxLength={500}
      className="resize-none h-20"
      onChange={(e) => handleAnswerChange(e.target.value)}
    />
  );
};

export default LongAnswer;
