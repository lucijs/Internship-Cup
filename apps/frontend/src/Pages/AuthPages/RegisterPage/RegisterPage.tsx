import { ChangeEvent, useState } from "react";
import CheckBoxField from "../../../components/Auth/CheckBoxField";
import FormIntroduction from "../../../components/Auth/FormIntroduction";
import DateInputField from "../../../components/Auth/InputFields/DateInputField";
import EmailInputField from "../../../components/Auth/InputFields/EmailInputField";
import PasswordInputField from "../../../components/Auth/InputFields/PasswordInputField";
import TextInputField from "../../../components/Auth/InputFields/TextInputField";
import SubmitButton from "../../../components/Auth/SubmitButton";
import classes from "./index.module.css";
import { api } from "../../../api";

const RegisterPage = () => {
  interface RegisterResponse {
    token: string;
  }

  const [registrationData, setRegistrationData] = useState({
    name: "",
    surname: "",
    dateOfBirth: new Date("01-01-2001").toISOString(),
    email: "",
    password: "",
    confirmationPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "dateOfBirth") {
      setRegistrationData((previousData) => ({
        ...previousData,
        dateOfBirth: changeDateFormatToIso(value),
      }));
    } else {
      setRegistrationData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const isoDate = await changeDateFormatToIso(registrationData.dateOfBirth);
      if (!isoDate) {
        console.error("Neispravan format datuma.");
        return;
      }

      setRegistrationData((previousData) => ({
        ...previousData,
        dateOfBirth: isoDate,
      }));

      const response = await sendRegistrationData();

      console.log("User registered successfully:", response);
      localStorage.setItem("token", response["token"]);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error in registration process: ", error);
      setErrorMessage(error ? error.toString() : "");
    }
  };

  const changeDateFormatToIso = (date: string) => {
    const isoDate = new Date(date).toISOString();
    return isoDate;
  };

  const sendRegistrationData = async () => {
    const response = api.post<never, RegisterResponse>(
      "/users/register",
      registrationData
    );
    return response;
  };

  return (
    <>
      <div className={classes.registerFormWrapper}>
        <FormIntroduction
          firstText="Kreiraj svoj račun"
          secondText="Pridruži se Vitasano zajednici!"
        />
        <TextInputField
          label="Ime"
          placeholder="Unesite svoje ime"
          onChange={handleInputChange}
          name="name"
        />
        <TextInputField
          label="Prezime"
          placeholder="Unesite svoje prezime"
          onChange={handleInputChange}
          name="surname"
        />

        <DateInputField
          label="Datum rođenja"
          onChange={handleInputChange}
          name="dateOfBirth"
        />

        <EmailInputField
          label="Email adresa"
          placeholder="Unesi svoju email adresu"
          onChange={handleInputChange}
          name="email"
        />
        <PasswordInputField
          label="Lozinka"
          placeholder="Odaberi jaku lozinku"
          onChange={handleInputChange}
          name="password"
        />
        <PasswordInputField
          label="Potvrda lozinke"
          placeholder="Potvrdi svoju lozinku"
          onChange={handleInputChange}
          name="confirmationPassword"
        />
        <div className={classes.belowRegisterForm}>
          <p className={classes.errorMessage}>{errorMessage}</p>
          <CheckBoxField
            text="Slažem se s Uvjetima usluge i Politikom privatnosti."
            setState={setGdpr}
          />
          <SubmitButton
            buttonText="Stvori račun"
            handleSubmit={
              gdpr
                ? handleSubmit
                : () => setErrorMessage("GDPR checkbox nije označen")
            }
          />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
