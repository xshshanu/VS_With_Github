import React from "react";
import "./InterpretBMI.css";

const InterpretBMI = ({ bmi }) => {
  const interpretBMI = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (
    <div className="inter">
      Your BMI indicates:{" "}
      <span className="span-inter">{interpretBMI(bmi)}</span>
    </div>
  );
};

export default InterpretBMI;
