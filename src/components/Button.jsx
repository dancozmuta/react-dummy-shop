import React from "react";
import "./Button.scss";

const Styles = [
  "btn--primary-default",
  "btn--primary-inverted",
  "btn--secondary-default",
  "btn--secondary-inverted",
  "btn--danger",
  "btn--warning",
  "btn--success",
];

const Sizes = ["btn--default", "btn--small" ,"btn--medium", "btn--large", "btn--full"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];
  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
