import { Textarea } from "@/shared/ui/textarea";

const LongAnswer: React.FC = () => {
  return <Textarea maxLength={500} disabled className="resize-none h-20" />;
};

export default LongAnswer;
