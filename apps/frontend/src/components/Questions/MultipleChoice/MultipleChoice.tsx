import { useEffect, useState } from "react";
import classes from "./index.module.css";

const MultipleChoice = ({
  question,
  possibleAnswers,
  correctAnswer1,
  toggleMode,
}: {
  question: string;
  possibleAnswers: string[];
  correctAnswer1: string[];
  correctAnswer2: string[];
  toggleMode: (value: boolean) => void;
}) => {
  const [optionChosen, setOptionChosen] = useState("");

  useEffect(() => {
    if (optionChosen === correctAnswer1[0]) {
      toggleMode(true);
    }
  }, [optionChosen]);

  return (
    <div className={classes.body}>
      <div className={classes.question}>{question}</div>
      <div className={classes.questionFillIn}>
        <button
          onClick={() => setOptionChosen(possibleAnswers[0])}
          className={`${optionChosen === possibleAnswers[0] ? classes.selected : classes.unselected}`}>
          <div className={classes.text}>{possibleAnswers[0]}</div>
        </button>
        <button
          onClick={() => setOptionChosen(possibleAnswers[1])}
          className={` ${optionChosen === possibleAnswers[1] ? classes.selected : classes.unselected}`}>
          <div className={classes.text}>{possibleAnswers[1]}</div>
        </button>
        <button
          onClick={() => setOptionChosen(possibleAnswers[2])}
          className={`${optionChosen === possibleAnswers[2] ? classes.selected : classes.unselected}`}>
          <div className={classes.text}>{possibleAnswers[2]}</div>
        </button>
        <button
          onClick={() => setOptionChosen(possibleAnswers[3])}
          className={`${optionChosen === possibleAnswers[3] ? classes.selected : ""}`}>
          <div className={classes.text}>{possibleAnswers[3]}</div>
        </button>
      </div>
    </div>
  );
};

export default MultipleChoice;
