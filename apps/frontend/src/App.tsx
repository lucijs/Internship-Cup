import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";
import DashboardPage from "./Pages/DashboardPage";
import Quiz from "./Pages/QuizPage";
import QuizSuccessWithoutStreak from "./components/Quiz/Success/QuizSuccessWithoutStreak";
import UserProvider, { useUser } from "./providers/UserProvider";
import MyProfilePage from "./Pages/MyProfilePage";
import ExaminationsPage from "./Pages/ExaminationsPage";

function App() {
  const { userId } = useUser();
  return (
    <>
      <DashboardPage />
      <UserProvider>
        <ScoreProvider>
          <Routes>
            <Route path="/users" element={<AuthPage />} />
          </Routes>
        </ScoreProvider>
      </UserProvider>
    </>
  );
}

export default App;
