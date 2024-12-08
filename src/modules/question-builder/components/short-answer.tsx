import { Textarea } from "@/shared/ui/textarea";

const ShortAnswer: React.FC = () => {
  return <Textarea maxLength={150} className="resize-none max-h-8" />;
};

export default ShortAnswer;
