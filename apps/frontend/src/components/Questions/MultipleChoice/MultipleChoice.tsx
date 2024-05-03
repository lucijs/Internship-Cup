import { useState } from "react";
import { Questions } from "./questions";
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
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [optionChosen, setOptionChosen] = useState("");
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState("");
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) setStage("Točno!");
    else setStage("Netočno");
  };

  return (
    <>
      <h1>{question}</h1>
      <div>
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      <button onClick={nextQuestion}>Finish</button>

      <div>Odabrani odgovor: {optionChosen}</div>
      <div>Vaš odgovor: {stage}</div>
    </>
  );
};

export default MultipleChoice;
