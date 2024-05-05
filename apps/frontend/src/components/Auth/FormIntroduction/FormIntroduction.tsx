import classes from "./index.module.css";

const FormIntroduction = ({
  firstText,
  secondText,
}: {
  firstText: string;
  secondText: string;
}) => {
  return (
    <div className={classes.formIntroduction}>
      <h2>{firstText}</h2>
      <h3>{secondText}</h3>
    </div>
  );
};

export default FormIntroduction;
