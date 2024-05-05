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
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const handleChange1 = (_event: Event, newValue: number | number[]) => {
    setValue1(newValue as number);
  };
  const handleChange2 = (_event: Event, newValue: number | number[]) => {
    setValue2(newValue as number);
  };
  return (
    <>
      {question}
      {possibleAnswers[0]}
      <Slider
        aria-label="Small steps"
        value={value1}
        onChange={handleChange1}
        defaultValue={+possibleAnswers[3]}
        marks
        step={+possibleAnswers[5]}
        min={+possibleAnswers[3]}
        max={+possibleAnswers[4]}
        valueLabelDisplay="auto"
      />
      <Slider
        aria-label="Small steps"
        value={value2}
        onChange={handleChange2}
        defaultValue={+possibleAnswers[8]}
        marks
        step={+possibleAnswers[10]}
        min={+possibleAnswers[8]}
        max={+possibleAnswers[9]}
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default SliderQuestion;
