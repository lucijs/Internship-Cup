import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import classes from "./index.module.css";

const SliderQuestion = ({
  question,
  possibleAnswers,
  correctAnswer1,
  correctAnswer2,
  toggleMode,
}: {
  question: string;
  possibleAnswers: string[];
  correctAnswer1: string[];
  correctAnswer2: string[];
  toggleMode: (value: boolean) => void;
}) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const handleChange1 = (_event: Event, newValue: number | number[]) => {
    if (
      (newValue as number) !== +possibleAnswers[3] - +possibleAnswers[5] &&
      (newValue as number) !== +possibleAnswers[4] + +possibleAnswers[5]
    ) {
      setValue1(newValue as number);
    }
  };
  const handleChange2 = (_event: Event, newValue: number | number[]) => {
    if (
      (newValue as number) !== +possibleAnswers[8] - +possibleAnswers[10] &&
      (newValue as number) !== +possibleAnswers[9] + +possibleAnswers[10]
    ) {
      setValue2(newValue as number);
    }
  };

  useEffect(() => {
    if (value1 === +correctAnswer1[0] && value2 === +correctAnswer2) {
      toggleMode(true);
    }
  }, [value1, value2]);

  return (
    <div className={classes.body}>
      <div className={classes.questionDescription}>{question}</div>
      <div className={classes.question}>{possibleAnswers[0]}</div>
      <div className={classes.sliderContainer}>
        <div className={classes.sliderContainerOne}>
          <Slider
            value={value1}
            onChange={handleChange1}
            defaultValue={+possibleAnswers[3]}
            marks
            track={false}
            step={+possibleAnswers[5]}
            min={+possibleAnswers[3] - +possibleAnswers[5]}
            max={+possibleAnswers[4] + +possibleAnswers[5]}
            className={classes.slider}
          />
          <div className={classes.sliderDescription}>
            <div>{possibleAnswers[1]}</div>
            <div className={classes.sliderDescriptionValue}>{value1}</div>
            <div>{possibleAnswers[2]}</div>
          </div>
        </div>
        <div className={classes.sliderContainerOne}>
          <Slider
            aria-label="Small steps"
            value={value2}
            onChange={handleChange2}
            defaultValue={+possibleAnswers[8]}
            track={false}
            marks
            step={+possibleAnswers[10]}
            min={+possibleAnswers[8] - +possibleAnswers[10]}
            max={+possibleAnswers[9] + +possibleAnswers[10]}
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
