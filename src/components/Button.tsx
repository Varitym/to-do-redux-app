type Props = {
  text: string;
  onClick: () => void;
  color: string;
  icon: JSX.Element;
  isDisabled?: boolean;
};

export const Button = ({ text, onClick, icon, isDisabled }: Props) => {
  return (
    <button className="row" onClick={onClick} disabled={isDisabled}>
      {icon}
      {text}
    </button>
  );
};
