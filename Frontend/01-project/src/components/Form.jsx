import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import Info from "./Info";
import Heading from "./Heading";
import InterpretBMI from "./InterpretBMI";
import "./Form.css";

const Form = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const handleCalculateBMI = () => {
    if (weight && height) {
      const bmiValue = calculateBMI(parseFloat(weight), parseFloat(height));
      setBMI(bmiValue);
      setWeight("");
      setHeight("");
    } else {
      alert("Please enter both weight and height.");
    }
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  return (
    <>
      <Heading />
      <div className="form">
        <Label titleW="Weight" spanW="(KiloGram)" />
        <Input
          placeholder="Enter Your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Label titleH="Height" spanH="(Meter)" />
        <Input
          placeholder="Enter Your Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <Button btnTitle="Calculate BMI" onClick={handleCalculateBMI} />
        {/* {bmi && <Info bmi={bmi} />} */}
        <Info bmi={bmi} />
        {bmi && <InterpretBMI bmi={parseFloat(bmi)} />}
      </div>
    </>
  );
};

export default Form;
