import DailyAdvice from "../../components/Dashboard/DailyAdvice";
import HighlightedQuiz from "../../components/Dashboard/HighlightedQuiz";
import PointsCard from "../../components/Dashboard/PointsCard";
import StreakCard from "../../components/Dashboard/StreakCard";
import classes from "./index.module.css";

const DashboardPage = () => {
  return (
    <>
      <div className={classes.dashboardPageWrapper}>
        <h2>Pozdrav, Marko! 👋</h2>

        <div className={classes.dashboardIntroSection}>
          <DailyAdvice />

          <div className={classes.streakPointsSection}>
            <StreakCard />
            <PointsCard />
          </div>
        </div>

        <h3>Posebno za tebe</h3>

        <h4 className={classes.dashboardSubtitle}>ISTAKNUTI KVIZOVI</h4>

        <div className={classes.highlightedQuizzesContainer}>
          <HighlightedQuiz />
          <HighlightedQuiz />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
