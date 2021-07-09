import React from "react";
import "./Button.css";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}

export default Button;
