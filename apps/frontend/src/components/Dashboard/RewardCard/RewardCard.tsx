import classes from "./index.module.css";

const RewardCard = ({
  category,
  description,
}: {
  category: string;
  description: string;
}) => {
  return (
    <div className={classes.rewardCard}>
      <h4 className={classes.rewardCardCategory}>{category}</h4>
      <h3 className={classes.rewardCardDescription}>{description}</h3>
    </div>
  );
};

export default RewardCard;
