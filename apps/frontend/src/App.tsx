import "./index.css";
import AuthPage from "./Pages/AuthPages/AuthPage";
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
        </Routes>
      </ScoreProvider>
    </>
  );
}

export default App;
