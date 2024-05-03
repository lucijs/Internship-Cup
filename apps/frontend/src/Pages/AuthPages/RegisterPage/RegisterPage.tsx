import FormIntroduction from "../../../components/Auth/FormIntroduction";
import EmailInputField from "../../../components/Auth/InputFields/EmailInputField";
import PasswordInputField from "../../../components/Auth/InputFields/PasswordInputField";
import TextInputField from "../../../components/Auth/InputFields/TextInputField";
import classes from "./index.module.css";
const RegisterPage = () => {
  return (
    <>
      <div className={classes.registerFormWrapper}>
        <FormIntroduction
          firstText="Kreiraj svoj račun"
          secondText="Pridruži se Vitasano zajednici!"
        />
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
