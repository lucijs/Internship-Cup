import { ChangeEvent, useState } from "react";
import FormIntroduction from "../../../components/Auth/FormIntroduction";
import EmailInputField from "../../../components/Auth/InputFields/EmailInputField";
import PasswordInputField from "../../../components/Auth/InputFields/PasswordInputField";
import SubmitButton from "../../../components/Auth/SubmitButton";
import classes from "./index.module.css";
import { api } from "../../../api";

const LoginPage = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  interface LoginResponse {
    token: string;
    userId: Number;
    name: string;
    surname: string;
    lastStreakDate: Date | null;
    points: number;
    streaks: number;
  }

  const [loginData, setLoginData] = useState({ name: "", password: "" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await sendLoginInfo();
      const yesterday = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 1,
        0,
        0,
        0,
        0
      );
      console.log(yesterday);
      localStorage.setItem("token", response["token"]);
      localStorage.setItem("id", String(response["userId"]));
      localStorage.setItem("name", response["name"]);
      localStorage.setItem("surname", response["surname"]);
      localStorage.setItem(
        "lastStreakDate",
        String(response["lastStreakDate"])
      );
      localStorage.setItem("points", String(response["points"]));

      if (
        response["lastStreakDate"] !== null &&
        new Date(response["lastStreakDate"]).getFullYear() ===
          yesterday.getFullYear() &&
        new Date(response["lastStreakDate"]).getMonth() ===
          yesterday.getMonth() &&
        new Date(response["lastStreakDate"]).getDate() === yesterday.getDate()
      ) {
        localStorage.setItem("streaks", String(response["streaks"]));
      } else {
        localStorage.setItem("streaks", String(0));
      }
    } catch (error) {
      console.error("Error in login process: ", error);
    }
    window.location.href = "/dashboard";
  };

  const sendLoginInfo = async () => {
    const response = await api.post<never, LoginResponse>(
      "users/login",
      loginData
    );
    return response;
  };
  return (
    <>
      <div className={classes.loginPageWrapper}>
        <FormIntroduction
          firstText="Dobrodošao/la natrag!"
          secondText="Prijavi se u svoj račun"
        />
        <div className={classes.loginFormWrapper}>
          <EmailInputField
            label="Email adresa"
            placeholder="Unesi svoju email adresu"
            name="email"
            onChange={handleInputChange}
          />
          <PasswordInputField
            label="Lozinka"
            placeholder="Unesi svoju lozinku"
            name="password"
            onChange={handleInputChange}
          />
        </div>

        <div className={classes.belowLoginForm}>
          <SubmitButton buttonText="Prijavi se" handleSubmit={handleSubmit} />
          <p className={classes.registerHereText}>
            Nemaš račun?{" "}
            <span onClick={onRegisterClick}>Registriraj se ovdje.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
