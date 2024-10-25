import { FunctionComponent } from "react";

import { ButtonProps } from "./index";
import "./button.scss";

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { label, onClick } = props as ButtonProps;

  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
