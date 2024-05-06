import React, { MouseEventHandler } from "react";
import classes from "./index.module.css";

const SubmitButton: React.FC<{
  buttonText: string;
  handleSubmit: MouseEventHandler;
}> = ({ buttonText, handleSubmit }) => {
  return (
    <button onClick={handleSubmit} className={classes.authSubmitButton}>
      {buttonText}
    </button>
  );
};

export default SubmitButton;
