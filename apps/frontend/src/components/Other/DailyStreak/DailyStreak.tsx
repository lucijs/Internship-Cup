import classes from "./index.module.css";

const DailyStreak = ({
  type,
  date,
  day,
}: {
  type: string;
  date: string;
  day: string;
}) => {
  return (
    <div
      className={
        type === "no streak"
          ? `${classes.dailyStreak} ${classes.noStreak}`
          : type === "streak"
            ? `${classes.dailyStreak} ${classes.streak}`
            : `${classes.dailyStreak} ${classes.futureStreak}`
      }>
      <div className={classes.date}>{date}</div>
      <div className={classes.day}>{day}</div>
    </div>
  );
};

export default DailyStreak;
