import React, { useState } from "react";

const Info = ({bmi}) => {

    const infoStyle = {
        marginTop : "70px",
        color :"#fff",
        textAlign : "center"
    }

  return <div style={infoStyle}>Your BMI is : {bmi}</div>;
};

export default Info;
