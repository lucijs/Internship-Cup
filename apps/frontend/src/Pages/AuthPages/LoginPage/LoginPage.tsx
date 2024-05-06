import { Link } from "react-router-dom";
import FormIntroduction from "../../../components/Auth/FormIntroduction";
import EmailInputField from "../../../components/Auth/InputFields/EmailInputField";
import PasswordInputField from "../../../components/Auth/InputFields/PasswordInputField";
import SubmitButton from "../../../components/Auth/SubmitButton";
import classes from "./index.module.css";

const LoginPage = () => {
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
          />
          <PasswordInputField
            label="Lozinka"
            placeholder="Unesi svoju lozinku"
          />
        </div>

        <div className={classes.belowLoginForm}>
          <SubmitButton buttonText="Prijavi se" />
          <p className={classes.registerHereText}>
            Nemaš račun? <Link to={"register"}>Registriraj se ovdje.</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
