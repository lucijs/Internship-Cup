import { Button, MobileStepper } from "@mui/material";
import { Category, QuizQuestion, User } from "@prisma/client";
import { useEffect, useState } from "react";
import FillInQuestion from "../../components/Questions/DnDQuestion/FillInQuestion";
import MultipleChoice from "../../components/Questions/MultipleChoice";
import SliderQuestion from "../../components/Questions/SliderQuestion";
import MatchingQuestion from "../../components/Questions/DnDQuestion/MatchingQuestion";
import FillInOneQuestion from "../../components/Questions/DnDQuestion/FillInOneQuestion";
import classes from "./index.module.css";
import { useScore } from "../../providers/ScoreProvider";
import Fail from "../../components/Quiz/Fail";
import AcquiredStreak from "../../components/Quiz/Success/AcquiredStreak";
import QuizSuccessWithoutStreak from "../../components/Quiz/Success/QuizSuccessWithoutStreak";
import { api } from "../../api";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();
  if (id === undefined || id === null) {
    history.back();
  } else {
    console.log(+id);
    const [displayedItem, setDisplayedItem] = useState(<div></div>);
    const [activeStep, setActiveStep] = useState(0);
    const [buttonText, setButtonText] = useState("Započni kviz");
    const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
    const [questionDisplay, setQuestionDisplay] = useState(<></>);
    const [title, setTitle] = useState("");
    const { score, toggleMode, reset } = useScore();
    const [addedPoints, setAddedPoints] = useState(0);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      fetchQuizData(+id);
      fetchQuestions(+id);
    }, []);

    const goBack = () => {
      history.back();
    };

    const fetchQuizData = (id: number) => {
      Promise.all([
        api.get<never, any>(`quizzes/${+id}`),
        api.get<never, any>(`quizzes/categories/${+id}`),
      ]).then(([quizData, categoryData]) => {
        console.log(categoryData);
        setAddedPoints(quizData["earnedPoints"]);
        setDisplayedItem(
          <div>
            <div className={classes.container}>
              <div className={classes.backButtonAndTitle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none">
                  <g clipPath="url(#clip0_281_1666)">
                    <circle cx="20" cy="20" r="20" fill="#F2F2F2" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.658 21.3257C13.2367 20.9038 13 20.3319 13 19.7357C13 19.1394 13.2367 18.5676 13.658 18.1457L22.142 9.65869C22.5641 9.2368 23.1365 8.99986 23.7333 9C24.0288 9.00007 24.3214 9.05834 24.5944 9.17149C24.8674 9.28464 25.1154 9.45044 25.3243 9.65944C25.5332 9.86844 25.6989 10.1165 25.8119 10.3896C25.9249 10.6626 25.983 10.9552 25.983 11.2507C25.9829 11.5462 25.9246 11.8388 25.8115 12.1118C25.6983 12.3848 25.5325 12.6328 25.3235 12.8417L18.431 19.7357L25.325 26.6297C25.54 26.8371 25.7115 27.0853 25.8296 27.3598C25.9476 27.6342 26.0098 27.9295 26.0126 28.2282C26.0153 28.527 25.9585 28.8233 25.8455 29.0998C25.7325 29.3764 25.5656 29.6277 25.3544 29.8391C25.1433 30.0504 24.8921 30.2176 24.6157 30.3309C24.3392 30.4441 24.0429 30.5012 23.7442 30.4987C23.4454 30.4963 23.1502 30.4344 22.8756 30.3166C22.601 30.1988 22.3527 30.0275 22.145 29.8127L13.655 21.3257H13.658Z"
                      fill="#F5B943"
                      onClick={goBack}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_281_1666">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={classes.titleBox}>
                  {categoryData.map((element: Category) => (
                    <div key={element.categoryId} className={classes.category}>
                      {element.name}
                    </div>
                  ))}
                  <div className={classes.title}>{quizData["name"]}</div>
                </div>
              </div>
              <img src={categoryData[0].img} className={classes.img} />
            </div>
            <div className={classes.textContainer}>
              <div className={classes.subtitle}>{quizData["description"]}</div>
              <div className={classes.text}>{quizData["text"]}</div>
              <div className={classes.buttonStartQuizContainer}>
                <Button
                  onClick={handleStartQuiz}
                  className={classes.buttonStartQuiz}>
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        );
        setTitle(quizData["name"]);
      });
    };

    const fetchQuestions = (id: number) => {
      api
        .get<never, QuizQuestion[]>(`quizQuestions/quizId/${id}`)
        .then((data) => {
          const dataArray = Array.isArray(data) ? data : [data];
          console.log(dataArray[0]);
          handleQuestion(dataArray[0]);
          setQuestions(dataArray);
        });
    };

    const getUser = async () => {
      const id = localStorage.getItem("id");
      await api.get<never, any>(`users/${+!id}`).then((response) => {
        setUser(response);
        console.log(response);
      });
    };

    const handleEndQuiz = () => {
      if (score === 0) {
        setDisplayedItem(<Fail />);
      } else {
        const today = new Date();
        const date = localStorage.getItem("lastStreak");
        const points = localStorage.getItem("points");
        const streaks = localStorage.getItem("streaks");
        const id = localStorage.getItem("id");

        if (points !== null)
          localStorage.setItem("points", String(+points + addedPoints));

        if (today.toDateString() === date) {
          setDisplayedItem(<QuizSuccessWithoutStreak points={addedPoints} />);
        } else {
          setDisplayedItem(
            <AcquiredStreak points={addedPoints} streaks={+!streaks + 1} />
          );
        }
        localStorage.setItem("streaks", String(+!streaks + 1));
        localStorage.setItem("lastStreak", new Date().toDateString());

        api.patch(`users/${id}`);
      }
      setActiveStep(6);
    };

    useEffect(() => {
      if (questions !== null && activeStep <= 4) {
        const question =
          questions[activeStep === 4 ? activeStep - 2 : activeStep - 1];
        handleQuestion(question);
      }
    }, [activeStep]);

    const handleQuestion = (question: QuizQuestion) => {
      switch (question["type"]) {
        case "fill in":
          setQuestionDisplay(
            <FillInQuestion
              question={question["question"]}
              possibleAnswers={question["possibleAnswers"]}
              correctAnswer1={question["correctAnswer1"]}
              correctAnswer2={question["correctAnswer2"]}
              toggleMode={toggleMode}
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
              toggleMode={toggleMode}
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
              toggleMode={toggleMode}
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
              toggleMode={toggleMode}
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
              toggleMode={toggleMode}
            />
          );
          break;
      }
    };

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleStartQuiz = () => {
      switch (activeStep) {
        case 2:
          setButtonText("Završi kviz");
          handleNext();
          break;
        case 0:
        case 1:
          setButtonText("Iduće pitanje");
          handleNext();
          break;
        default:
          handleEndQuiz();
          return;
      }
    };

    return (
      <div className={classes.body}>
        {activeStep !== 0 && activeStep !== 6 ? (
          <>
            <div className={classes.step}>{activeStep}/3</div>
            <MobileStepper
              variant="progress"
              steps={4}
              position="static"
              activeStep={activeStep}
              nextButton={<></>}
              backButton={<></>}
              className={classes.mobileStepper}
            />
            <div className={classes.questionCard}>
              <div className={classes.questionCardTitle}>{title}</div>
              <div className={classes.question}>{questionDisplay}</div>
            </div>
            <div className={classes.backgroundCard}></div>
            <div className={classes.furthestBackgroundCard}></div>
            <Button
              onClick={handleStartQuiz}
              className={classes.buttonNextQuestion}>
              {buttonText}
            </Button>
          </>
        ) : (
          <>{displayedItem}</>
        )}
      </div>
    );
  }
};

export default Quiz;
