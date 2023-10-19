import "./TextInput.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const TextInput = ({ onChange, value, ...props }: Props) => {
  return (
    <>
      <input onChange={onChange} value={value} {...props} className="input" />
    </>
  );
};
