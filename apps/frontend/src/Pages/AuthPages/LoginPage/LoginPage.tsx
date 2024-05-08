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
  }
  const [loginData, setLoginData] = useState({ name: "", password: "" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await sendLoginInfo();

      console.log("User successfully logged in: ", response);
      localStorage.setItem("token", response["token"]);
    } catch (error) {
      console.error("Error in login process: ", error);
    }
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
