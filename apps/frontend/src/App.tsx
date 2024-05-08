import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";
import DailyStreak from "./components/Other/DailyStreak";
import { Dashboard } from "@mui/icons-material";
import DashboardPage from "./Pages/DashboardPage";
import StreaksDisplay from "./components/Quiz/StreaksDisplay";
import AcquiredStreak from "./components/Quiz/Success/AcquiredStreak";
import QuizSuccessWithoutStreak from "./components/Quiz/Success/QuizSuccessWithoutStreak";

//ovaj tribamo dodat da vodi na pocetak <Route path="/" element={<ProductsLayout />} />

function App() {
  return (
    <>
      <QuizSuccessWithoutStreak />
      <ScoreProvider>
        <Routes>
          <Route path="/users" element={<AuthPage />} />
        </Routes>
      </ScoreProvider>
    </>
  );
}

export default App;
