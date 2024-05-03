import EmailInputField from "../../../components/Auth/InputFields/EmailInputField";
import PasswordInputField from "../../../components/Auth/InputFields/PasswordInputField";
import TextInputField from "../../../components/Auth/InputFields/TextInputField";
import classes from "./index.module.css";
const RegisterPage = () => {
  return (
    <>
      <div className={classes.registerFormWrapper}>
        <div className={classes.registerIntroduction}>
          <h2>Kreiraj svoj račun</h2>
          <h3>Pridruži se Vitasano zajednici</h3>
        </div>
        <TextInputField label="Ime" placeholder="Unesite svoje ime" />
        <TextInputField label="Prezime" placeholder="Unesite svoje prezime" />
        <TextInputField
          label="Datum rođenja"
          placeholder="Unesi svoj datum rođenja (dd/mm/gggg)"
        />{" "}
        {/* prominit kasnije u date input field */}
        <EmailInputField
          label="Email adresa"
          placeholder="Unesi svoju email adresu"
        />
        <PasswordInputField
          label="Lozinka"
          placeholder="Odaberi jaku lozinku"
        />
        <PasswordInputField
          label="Potvrda lozinke"
          placeholder="Potvrdi svoju lozinku"
        />
      </div>
    </>
  );
};

export default RegisterPage;
