import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import Quiz from "./Pages/QuizPage";

function App() {
  return (
    <>
      <Quiz id={1} />
      <AuthPage />
    </>
  );
}

export default App;
