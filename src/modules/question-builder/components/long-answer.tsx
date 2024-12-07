import { Textarea } from "@/shared/ui/textarea";

const LongAnswer: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={500}
      disabled
      className="resize-none h-[5rem]"
    />
  );
};

export default LongAnswer;
