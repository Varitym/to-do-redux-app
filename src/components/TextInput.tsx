type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const TextInput = ({ onChange, value }: Props) => {
  return (
    <div>
      <input onChange={onChange} value={value} className="input" />
    </div>
  );
};
