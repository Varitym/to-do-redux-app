import { ReactNode } from "react";
import "./Button.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  colorType?: "success" | "warning" | "error" | "disabled";
  icon: ReactNode;
};

export const Button = ({ icon, colorType = "success", ...props }: Props) => {
  return (
    <button className={`button ${colorType}`} {...props}>
      {icon}
    </button>
  );
};
