import React from "react";
import "./button.css";

const Button = ({
  id,
  color,
  disabled,
  onClick,
  className,
  FormAction,
  label,
  size,
  icon,
  type
}) => (
  <button
    id={id}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
    formAction={FormAction}
  >
    {label && <span>{label}</span>}
    {icon}
  </button>
);

export default Button;
