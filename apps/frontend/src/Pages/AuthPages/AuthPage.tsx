import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import classes from "./index.module.css";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AuthPage = () => {
  const [value, setValue] = useState(1);
  const [display, setDisplay] = useState(<></>);

  const handleRegistration = () => {
    setValue(0);
    setDisplay(<RegisterPage />);
  };
  const handleLogIn = () => {
    setValue(1);
    setDisplay(<LoginPage />);
  };
  return (
    <>
      <div className={classes.container}>
        <div
          className={
            value === 0
              ? classes.selected
              : `${classes.unselected} ${classes.marginRight}`
          }
          onClick={handleRegistration}>
          Registracija
        </div>
        <div
          className={
            value === 1
              ? classes.selected
              : `${classes.unselected} ${classes.marginLeft}`
          }
          onClick={handleLogIn}>
          Prijava
        </div>
      </div>
      {display}
    </>
  );
};

export default AuthPage;
