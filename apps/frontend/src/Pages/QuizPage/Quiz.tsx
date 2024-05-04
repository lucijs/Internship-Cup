import { Button, MobileStepper } from "@mui/material";
import { Category, QuizQuestion } from "@prisma/client";
import { useEffect, useState } from "react";
import FillInQuestion from "../../components/Questions/DnDQuestion/FillInQuestion";
import MultipleChoice from "../../components/Questions/MultipleChoice";
import SliderQuestion from "../../components/Questions/SliderQuestion";
import MatchingQuestion from "../../components/Questions/DnDQuestion/MatchingQuestion";
import FillInOneQuestion from "../../components/Questions/DnDQuestion/FillInOneQuestion";
import classes from "./index.module.css";

const Quiz = ({ id }: { id: number }) => {
  const [displayedItem, setDisplayedItem] = useState(<div></div>);
  const [activeStep, setActiveStep] = useState(1);
  const [buttonText, setButtonText] = useState("Započni kviz");
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [questionDisplay, setQuestionDisplay] = useState(<></>);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchQuizData(id);
    fetchQuestions(id);
  }, [id]);

  const fetchQuizData = (id: number) => {
    Promise.all([
      fetch(`/backend/quizes/${id}`).then((res) => res.json()),
      fetch(`/backend/quizes/categories/${id}`).then((res) => res.json()),
    ]).then(([quizData, categoryData]) => {
      setDisplayedItem(
        <div className={classes.container}>
          <img src={categoryData[0].img} className={classes.img} />
          <div>{quizData["name"]}</div>
          <div>{quizData["description"]}</div>
          <div>{quizData["text"]}</div>
          {categoryData.map((element: Category) => (
            <div key={element.categoryId}>{element.name}</div>
          ))}
        </div>
      );
      setTitle(quizData["name"]);
    });
  };

  const fetchQuestions = (id: number) => {
    fetch(`/backend/quizQuestions/quizId/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        setQuestions(dataArray);
      });
  };

  const handleEndQuiz = () => {
    console.log("kraj");
  };

  useEffect(() => {
    if (questions !== null && activeStep <= 4) {
      const question =
        questions[activeStep === 4 ? activeStep - 2 : activeStep - 1];
      switch (question["type"]) {
        case "fill in":
          setQuestionDisplay(
            <FillInQuestion
              question={question["question"]}
              possibleAnswers={question["possibleAnswers"]}
              correctAnswer1={question["correctAnswer1"]}
              correctAnswer2={question["correctAnswer2"]}
            />
          );
          break;
        case "fill in one":
          setQuestionDisplay(
            <FillInOneQuestion
              question={question["question"]}
              possibleAnswers={question["possibleAnswers"]}
              correctAnswer1={question["correctAnswer1"]}
              correctAnswer2={question["correctAnswer2"]}
            />
          );
          break;
        case "multiple choice":
          setQuestionDisplay(
            <MultipleChoice
              question={question["question"]}
              possibleAnswers={question["possibleAnswers"]}
              correctAnswer1={question["correctAnswer1"]}
              correctAnswer2={question["correctAnswer2"]}
            />
          );
          break;
        case "slider":
          setQuestionDisplay(
            <SliderQuestion
              question={question["question"]}
              possibleAnswers={question["possibleAnswers"]}
              correctAnswer1={question["correctAnswer1"]}
              correctAnswer2={question["correctAnswer2"]}
            />
          );
          break;
        case "match":
          setQuestionDisplay(
            <MatchingQuestion
              question={question["question"]}
              possibleAnswers={question["possibleAnswers"]}
              correctAnswer1={question["correctAnswer1"]}
              correctAnswer2={question["correctAnswer2"]}
            />
          );
          break;
      }
    }
  }, [displayedItem]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStartQuiz = () => {
    switch (activeStep) {
      case 3:
        setButtonText("Završi kviz");
        handleNext();
        break;
      case 1:
      case 2:
        setButtonText("Iduće pitanje");
        handleNext();
        break;
      default:
        handleEndQuiz();
        return;
    }
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
        {questionDisplay}
      </div>
    );
  };

  return (
    <div className={classes.body}>
      {activeStep > 1 ? <>{title}</> : <></>}
      {activeStep === 1 ? <></> : <>{activeStep - 1}/3</>}
      {displayedItem}
      <Button onClick={handleStartQuiz}>{buttonText}</Button>
    </div>
  );
};

export default Quiz;
