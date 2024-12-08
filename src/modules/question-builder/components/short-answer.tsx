import { Textarea } from "@/shared/ui/textarea";

type ShortAnswerProp = {
  handleAnswerChange: (answer: string) => void;
};

const ShortAnswer: React.FC<ShortAnswerProp> = ({ handleAnswerChange }) => {
  return (
    <Textarea
      maxLength={150}
      className="resize-none max-h-8"
      onChange={(e) => handleAnswerChange(e.target.value)}
    />
  );
};

export default ShortAnswer;
