import { Slider } from "@mui/material";
import { useState } from "react";
import classes from "./index.module.css";

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
    <div className={classes.body}>
      <div className={classes.questionDescription}>{question}</div>
      <div className={classes.question}>{possibleAnswers[0]}</div>
      <div className={classes.sliderContainer}>
        <div>
          <Slider
            aria-label="Small steps"
            value={value1}
            onChange={handleChange1}
            defaultValue={+possibleAnswers[3]}
            marks
            step={+possibleAnswers[5]}
            min={+possibleAnswers[3]}
            max={+possibleAnswers[4]}
            className={classes.slider}
          />
          <div className={classes.sliderDescription}>
            {possibleAnswers[1]}
            <div className={classes.sliderDescriptionValue}>{value1}</div>
            {possibleAnswers[2]}
          </div>
        </div>
        <div>
          <Slider
            aria-label="Small steps"
            value={value2}
            onChange={handleChange2}
            defaultValue={+possibleAnswers[8]}
            marks
            step={+possibleAnswers[10]}
            min={+possibleAnswers[8]}
            max={+possibleAnswers[9]}
            className={classes.slider}
          />
          <div className={classes.sliderDescription}>
            {possibleAnswers[6]}
            <div className={classes.sliderDescriptionValue}>{value2}</div>
            {possibleAnswers[7]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderQuestion;
