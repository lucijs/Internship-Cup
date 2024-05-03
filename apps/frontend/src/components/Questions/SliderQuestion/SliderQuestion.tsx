import { Slider } from "@mui/material";
import { useState } from "react";

const SliderQuestion = ({
  question,
  possibleAnswers,
  correctAnswer1,
  correctAnswer2,
}: {
  question: string;
  possibleAnswers: string[];
  correctAnswer1: string[];
  correctAnswer2: string[];
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <>
      {question}
      <Slider
        aria-label="Small steps"
        value={value}
        onChange={handleChange}
        defaultValue={0}
        step={1}
        min={-10}
        max={10}
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default SliderQuestion;
