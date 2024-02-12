import React from "react";
import './Button.css'

const Button = ({ btnTitle, onClick }) => {
  return <button onClick={onClick}> {btnTitle}</button>;
};

export default Button;
