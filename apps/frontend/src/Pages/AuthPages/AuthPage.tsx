import { useEffect, useState } from "react";
import classes from "./index.module.css";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AuthPage = () => {
  const [value, setValue] = useState(1);
  const [display, setDisplay] = useState(<></>);

  useEffect(() => {
    setDisplay(<LoginPage onRegisterClick={handleRegistration} />);
  }, []);

  const handleRegistration = () => {
    setValue(0);
    setDisplay(<RegisterPage />);
  };
  const handleLogIn = () => {
    setValue(1);
    setDisplay(<LoginPage onRegisterClick={handleRegistration} />);
  };

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div
          className={
            value === 0
              ? `${classes.selected} ${classes.widthRegister}`
              : `${classes.unselected} ${classes.marginRight}`
          }
          onClick={handleRegistration}>
          Registracija
        </div>
        <div
          className={
            value === 1
              ? `${classes.selected} ${classes.widthLogin}`
              : `${classes.unselected} ${classes.marginLeft}`
          }
          onClick={handleLogIn}>
          Prijava
        </div>
      </div>
      {display}
    </div>
  );
};

export default AuthPage;
