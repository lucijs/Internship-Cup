import { useEffect, useState } from "react";
import "./App.css";
import FillInQuestion from "./components/Questions/DnDQuestion/FillInQuestion";
import MatchingQuestion from "./components/Questions/DnDQuestion/MatchingQuestion/MatchingQuestion";
import SliderQuestion from "./components/Questions/SliderQuestion";
import Quiz from "./Pages/QuziPage";

function App() { return (
    <>
      <Quiz />
    </>
  );
}

export default App;
