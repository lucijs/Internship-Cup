import { ChangeEvent, useState } from "react";
import FormIntroduction from "../../../components/Auth/FormIntroduction";
import EmailInputField from "../../../components/Auth/InputFields/EmailInputField";
import PasswordInputField from "../../../components/Auth/InputFields/PasswordInputField";
import SubmitButton from "../../../components/Auth/SubmitButton";
import classes from "./index.module.css";
import { useUser } from "../../../providers/UserProvider";

const LoginPage = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const { addUser } = useUser();
  const [loginData, setLoginData] = useState({ name: "", password: "" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await sendLoginInfo();

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      console.log("User successfully logged in: ", responseData);
      console.log(typeof +responseData["id"]);
      localStorage.setItem("token", responseData["token"]);
      addUser({
        userId: responseData["userId"],
        userName: responseData["name"],
        userSurname: responseData["surname"],
        lasteStreak: responseData["lastStreakDate"],
        points: responseData["points"],
        streaks: responseData["streaks"],
      });
    } catch (error) {
      console.error("Error in login process: ", error);
    }
  };

  const sendLoginInfo = async () => {
    const response = await fetch("backend/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

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
