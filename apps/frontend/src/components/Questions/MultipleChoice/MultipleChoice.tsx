import { useState } from "react";
import classes from "./index.module.css";

const MultipleChoice = ({
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
  const [optionChosen, setOptionChosen] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className={classes.body}>
      <div className={classes.question}>{question}</div>
      <div className={classes.questionFillIn}>
        <button onClick={() => setOptionChosen(possibleAnswers[0])}>
          <div className={classes.text}>{possibleAnswers[0]}</div>
        </button>
        <button onClick={() => setOptionChosen(possibleAnswers[1])}>
          <div className={classes.text}>{possibleAnswers[1]}</div>
        </button>
        <button onClick={() => setOptionChosen(possibleAnswers[2])}>
          <div className={classes.text}>{possibleAnswers[2]}</div>
        </button>
        <button onClick={() => setOptionChosen(possibleAnswers[3])}>
          <div className={classes.text}>{possibleAnswers[3]}</div>
        </button>
      </div>
    </div>
  );
};

export default MultipleChoice;
