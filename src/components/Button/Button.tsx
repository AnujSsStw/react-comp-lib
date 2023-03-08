import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  color?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button style={{ color: `${props.color ? props.color : "white"}` }}>
      {props.label}
    </button>
  );
};

export default Button;
