import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import Quiz from "./Pages/QuizPage";
import RegisterPage from "./Pages/AuthPages/RegisterPage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";

//ovaj tribamo dodat da vodi na pocetak <Route path="/" element={<ProductsLayout />} />

function App() {
  return (
    <>
      <ScoreProvider>
        <Routes>
          <Route path="/users" element={<AuthPage />} />
          <Route path="/users/register" element={<RegisterPage />} />
          <Route path="/users/login" element={<LoginPage />} />
        </Routes>
      </ScoreProvider>
    </>
  );
}

export default App;
