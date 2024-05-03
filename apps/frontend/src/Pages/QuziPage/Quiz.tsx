import { Button, MobileStepper, useTheme } from "@mui/material";
import { Category } from "@prisma/client";
import { useEffect, useState } from "react";

const Quiz = () => {
  const id = 1;
  const [displayedItem, setDisplayedItem] = useState(<></>);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(1);

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

  const handleStartQuiz = () => {
    
  };

  return (
    <>
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
      {displayedItem}
      <Button onClick={handleStartQuiz} />
    </>
  );
};

export default Quiz;
