import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
import RegisterPage from "./Pages/AuthPages/RegisterPage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ScoreProvider from "./providers/ScoreProvider";
import DailyStreak from "./components/Other/DailyStreak";

//ovaj tribamo dodat da vodi na pocetak <Route path="/" element={<ProductsLayout />} />

function App() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const d = days[date.getDay()][0];
  const m = date.getDate();
  return (
    <>
      <DailyStreak type="future" date={m.toString()} day={d.toString()} />
      <ScoreProvider>
        <Routes>
          <Route path="/users" element={<AuthPage />} />
          <Route path="/users" element={<AuthPage />} />
        </Routes>
      </ScoreProvider>
    </>
  );
}

export default App;
