import { FunctionComponent } from "react";

import "./button.scss";
import { ButtonProps } from "./index";

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { label, onClick } = props as ButtonProps;

  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
