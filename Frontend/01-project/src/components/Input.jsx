import React, { useState } from "react";
import "./Input.css";

const Input = ({value, onChange, placeholder }) => {

  return (
    <div className="input">
      <input className="inp" type="number" placeholder={placeholder} 
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;