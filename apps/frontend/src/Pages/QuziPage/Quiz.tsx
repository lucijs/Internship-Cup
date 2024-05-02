import { useTheme } from "@mui/material/styles";
import { Button, MobileStepper } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Quiz = () => {
  const [displayedItem, setDisplayedItem] = useState(<>neki</>);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const quizId = 1; // Zamijenite ovo s ID-om vašeg kviza

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    f1();
    f2();
  }, []);

  const f1 = () => {
    fetch("/backend/quizes/1")
      .then((res) => res.json())
      .then((res) => setDisplayedItem(() => <>{res["name"]}</>));
  };

  const f2 = () => {
    fetch("backend/quizes/categories/1")
      .then((res) => res.json())
      .then((res) => {
        setDisplayedItem((prev) => (
          <>
            {prev}
            {res[0]["name"]}
          </>
        ));
      });
  };

  return (
    <>
      {greeting}
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ width: 400, flexGrow: 1 }}
        nextButton={<></>}
        backButton={<></>}
      />
      {displayedItem}
    </>
  );
};

export default Quiz;
