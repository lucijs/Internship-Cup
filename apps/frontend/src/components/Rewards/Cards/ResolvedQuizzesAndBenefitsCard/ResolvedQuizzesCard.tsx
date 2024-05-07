import classes from "./index.module.css";

const ResolvedQuizzesAndBenefitsCard = ({
  cardText,
  numberValue,
}: {
  cardText: string;
  numberValue: number;
}) => {
  return (
    <>
      <div className={classes.resolvedQuizzesAndBenefitsCard}>
        <h4>{cardText}</h4>
        <span>{numberValue}</span>
      </div>
    </>
  );
};

export default ResolvedQuizzesAndBenefitsCard;
