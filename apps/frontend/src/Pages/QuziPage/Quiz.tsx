import { Button, MobileStepper, useTheme } from "@mui/material";
import { Category, QuizQuestion } from "@prisma/client";
import { useEffect, useState } from "react";
import FillInQuestion from "../../components/Questions/DnDQuestion/FillInQuestion";

const Quiz = () => {
  const id = 1;
  const [displayedItem, setDisplayedItem] = useState(<div>neki</div>);
  const [activeStep, setActiveStep] = useState(1);
  const [buttonText, setButtonText] = useState("Započni kviz");
  const [questions, setQuestions] = useState<QuizQuestion | null>(null);

  useEffect(() => {
    fetchQuizData(id);
  }, [id]);

  const fetchQuizData = (id: number) => {
    Promise.all([
      fetch(`/backend/quizes/${id}`).then((res) => res.json()),
      fetch(`/backend/quizes/categories/${id}`).then((res) => res.json()),
    ]).then(([quizData, categoryData]) => {
      setDisplayedItem(
        <div>
          <div>{quizData["name"]}</div>
          <div>{quizData["description"]}</div>
          <div>{quizData["text"]}</div>
          {categoryData.map((element: Category) => (
            <div key={element.categoryId}>{element.name}</div>
          ))}
        </div>
      );
    });
  };

  const fetchQuestions = (id: number) => {
    fetch(`/backend/quizQuestions/quizId/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data[0]);
        console.log(data[0]);
        console.log(data[0]["possibleAnswers"]);
      });
  };

  const handleEndQuiz = () => {
    console.log("kraj");
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStartQuiz = () => {
    switch (activeStep) {
      case 3:
        setButtonText("Završi kviz");
        break;
      case 4:
        handleEndQuiz();
        break;
      default:
        setButtonText("Iduće pitanje");
        break;
    }
    handleNext();
    fetchQuestions(id);
    setDisplayedItem(
      <div>
        <div>
          <MobileStepper
            variant="progress"
            steps={4}
            position="static"
            activeStep={activeStep}
            sx={{ width: 400, flexGrow: 1 }}
            nextButton={<></>}
            backButton={<></>}
          />
        </div>
        {questions !== null ? (
          <FillInQuestion
            question={questions["question"]}
            possibleAnswers={questions["possibleAnswers"]}
            correctAnswer1={questions["correctAnswer1"]}
            correctAnswer2={questions["correctAnswer2"]}
          />
        ) : (
          <>sta</>
        )}
      </div>
    );
  };

  return (
    <>
      {questions !== null ? <>{questions.question}</> : <>ko</>}

      {activeStep}
      {displayedItem}
      <Button onClick={handleStartQuiz}>{buttonText}</Button>
    </>
  );
};

export default Quiz;
