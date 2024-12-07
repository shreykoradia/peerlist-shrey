import { Textarea } from "@/shared/ui/textarea";

const LongAnswer: React.FC = () => {
  return <Textarea maxLength={500} disabled className="resize-none h-[5rem]" />;
};

export default LongAnswer;
