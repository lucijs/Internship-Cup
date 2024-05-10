import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";
import DashboardPage from "./Pages/DashboardPage";
import Quiz from "./Pages/QuizPage";
import UserProvider from "./providers/UserProvider";
import MyProfilePage from "./Pages/MyProfilePage";
import ExaminationsPage from "./Pages/ExaminationsPage";
import ClickedProvider from "./providers/ClickedProvider";
import ServerNotFoundPage from "./Pages/ServerNotFoundPage";

function App() {
  return (
    <>
      <ClickedProvider>
        <UserProvider>
          <ScoreProvider>
            <Routes>
              <Route path="/users" element={<AuthPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/my-profile" element={<MyProfilePage />} />
              <Route path="/examinations" element={<ExaminationsPage />} />
              <Route path="*" element={<ServerNotFoundPage />} />
            </Routes>
          </ScoreProvider>
        </UserProvider>
      </ClickedProvider>
    </>
  );
}

export default App;
