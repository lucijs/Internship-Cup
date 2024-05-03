import { useState } from "react";
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
    <>
      <h1>{question}</h1>
      <div>
        <button onClick={() => setOptionChosen(possibleAnswers[0])}>
          {possibleAnswers[0]}
        </button>
        <button onClick={() => setOptionChosen(possibleAnswers[1])}>
          {possibleAnswers[1]}
        </button>
        <button onClick={() => setOptionChosen(possibleAnswers[2])}>
          {possibleAnswers[2]}
        </button>
        <button onClick={() => setOptionChosen(possibleAnswers[3])}>
          {possibleAnswers[3]}
        </button>
      </div>
    </>
  );
};

export default MultipleChoice;
