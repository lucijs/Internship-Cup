import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";
import Quiz from "./Pages/QuizPage";

//ovaj tribamo dodat da vodi na pocetak <Route path="/" element={<ProductsLayout />} />

function App() {
  return (
    <>
      <ScoreProvider>
        <Routes>
          <Route path="/users" element={<AuthPage />} />
          <Route path="/quiz" element={<Quiz id={2} />} />
        </Routes>
      </ScoreProvider>
    </>
  );
}

export default App;
