import { Button, MobileStepper } from "@mui/material";
import { Category, QuizQuestion } from "@prisma/client";
import { useEffect, useState } from "react";
import FillInQuestion from "../../components/Questions/DnDQuestion/FillInQuestion";
import MultipleChoice from "../../components/Questions/MultipleChoice";
import SliderQuestion from "../../components/Questions/SliderQuestion";
import MatchingQuestion from "../../components/Questions/DnDQuestion/MatchingQuestion";

const Quiz = () => {
  const id = 1;
  const [displayedItem, setDisplayedItem] = useState(<div>neki</div>);
  const [activeStep, setActiveStep] = useState(1);
  const [buttonText, setButtonText] = useState("Započni kviz");
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [questionDIsplay, setQuestionDisplay] = useState(<></>);

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
        const dataArray = Array.isArray(data) ? data : [data];
        setQuestions(dataArray);
        console.log(dataArray);
        console.log(dataArray[0]["possibleAnswers"]);
      });
  };

  const handleEndQuiz = () => {
    console.log("kraj");
  };

  useEffect(() => {
    if (questions !== null) {
      console.log(activeStep);
      const question = questions[activeStep - 1];
      console.log(question);
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
        console.log("tri je");
        setButtonText("Završi kviz");
        break;
      case 5:
        console.log("5 je");
        handleEndQuiz();
        return;
      default:
        console.log("next je");
        setButtonText("Iduće pitanje");
        handleNext();
        break;
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
        {questionDIsplay}
      </div>
    );
  };

  return (
    <>
      {activeStep}
      {displayedItem}
      <Button onClick={handleStartQuiz}>{buttonText}</Button>
    </>
  );
};

export default Quiz;
