import { Slider } from "@mui/material";
import React, { useState } from "react";

const SliderQuestion: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <>
      <Slider
        aria-label="Small steps"
        value={value}
        onChange={handleChange}
        defaultValue={0}
        step={1}
        marks
        min={-10}
        max={10}
        valueLabelDisplay="auto"
      />
      <h1>{value}</h1>
    </>
  );
};

export default SliderQuestion;
