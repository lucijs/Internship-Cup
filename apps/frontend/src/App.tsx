import { useEffect, useState } from "react";
import RegisterPage from "./Pages/AuthPages/RegisterPage";
import "./App.css";
import FillInQuestion from "./components/Questions/DnDQuestion/FillInQuestion";
import MatchingQuestion from "./components/Questions/DnDQuestion/MatchingQuestion/MatchingQuestion";
import SliderQuestion from "./components/Questions/SliderQuestion";
import Quiz from "./Pages/QuizPage";


function App() {
  return (
    <>
      {/* <Quiz /> */}
      <RegisterPage />
    </>
  );
}

export default App;
