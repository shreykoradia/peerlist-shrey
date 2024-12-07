import { Input } from "@/shared/ui/input";

const DateInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled
      className="h-[2rem]"
    />
  );
};

export default DateInput;
