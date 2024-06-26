import classes from "./index.module.css";
import DailyStreak from "../../Other/DailyStreak";

const StreaksDisplay = ({ dateRegistered }: { dateRegistered: Date }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateArray: Date[] = [];

  let streaks: number;

  const streaksFromLocalStorage = localStorage.getItem("streaks");
  if (streaksFromLocalStorage !== null) {
    streaks = +streaksFromLocalStorage;
  } else {
    streaks = 4;
  }

  const threeDaysAgo = new Date(dateRegistered.getTime());
  threeDaysAgo.setDate(dateRegistered.getDate() - streaks);

  const threeDaysLater = new Date(new Date().getTime());
  threeDaysLater.setDate(new Date().getDate() + 3);

  for (
    let currentDate = new Date(threeDaysAgo);
    currentDate <= threeDaysLater;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    dateArray.push(new Date(currentDate));
  }

  const dayOfTheWeek = (date: Date) => {
    return days[date.getDay()][0];
  };
  const dateOfTheMonth = (date: Date) => {
    return date.getDate().toString();
  };

  return (
    <div className={classes.container}>
      <div className={classes.streaks}>
        {dateArray.map((date, index) => (
          <DailyStreak
            key={index}
            type={date > new Date() ? "futureStreak" : "streak"}
            date={dateOfTheMonth(date)}
            day={dayOfTheWeek(date)}
          />
        ))}
      </div>
    </div>
  );
};

export default StreaksDisplay;
