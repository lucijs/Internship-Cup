import classes from "./index.module.css";

const SubmitButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <>
      <button className={classes.authSubmitButton}>{buttonText}</button>
    </>
  );
};

export default SubmitButton;
