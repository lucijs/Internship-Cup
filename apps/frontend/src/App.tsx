import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";
import DashboardPage from "./Pages/DashboardPage";
import Quiz from "./Pages/QuizPage";
import MyProfilePage from "./Pages/MyProfilePage";
import ExaminationsPage from "./Pages/ExaminationsPage";

function App() {
  return (
    <>
      <ScoreProvider>
        <Routes>
          <Route path="/users" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="quiz" element={<Quiz id={2} />} />
          <Route path="/my-profile" element={<MyProfilePage />} />
          <Route path="/examinations" element={<ExaminationsPage />} />
        </Routes>
      </ScoreProvider>
    </>
  );
}

export default App;
