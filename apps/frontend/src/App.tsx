import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";
import RewardsPage from "./Pages/RewardsPage";
import DashboardPage from "./Pages/DashboardPage";
import Quiz from "./Pages/QuizPage";
import QuizSuccessWithoutStreak from "./components/Quiz/Success/QuizSuccessWithoutStreak";

function App() {
  return (
    <>
      <QuizSuccessWithoutStreak />
      <DashboardPage />
      <ScoreProvider>
        <Routes>
          <Route path="/users" element={<AuthPage />} />
        </Routes>
      </ScoreProvider>
    </>
  );
}

export default App;
