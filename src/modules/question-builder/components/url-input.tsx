import { Input } from "@/shared/ui/input";

const URLInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Input
      type="url"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled
      className="h-[2rem]"
    />
  );
};

export default URLInput;
