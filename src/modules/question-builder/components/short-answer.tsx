import { Textarea } from "@/shared/ui/textarea";

const ShortAnswer: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={150}
      disabled
      className="resize-none max-h-[2rem]"
    />
  );
};

export default ShortAnswer;
