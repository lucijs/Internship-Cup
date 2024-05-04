import DailyAdvice from "../../components/Dashboard/DailyAdvice";
import HighlightedQuiz from "../../components/Dashboard/HighlightedQuiz";
import PointsCard from "../../components/Dashboard/PointsCard";
import PreventiveExamination from "../../components/Dashboard/PreventiveExamination";
import RewardCard from "../../components/Dashboard/RewardCard";
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

        <h3 className={classes.dashboardSpecialForYou}>Posebno za tebe</h3>

        <h4 className={classes.dashboardSubtitle}>ISTAKNUTI KVIZOVI</h4>

        <div className={classes.highlightedQuizzesContainer}>
          <HighlightedQuiz />
          <HighlightedQuiz />
        </div>

        <h4 className={classes.dashboardSubtitle}>NOVI PREVENTIVNI PREGLEDI</h4>

        <div className={classes.preventiveExaminationsContainer}>
          <PreventiveExamination />
        </div>

        <h4 className={classes.dashboardSubtitle}>POGODNOSTI NAŠIH PARTNERA</h4>

        <div className={classes.rewardCardsContainer}>
          <RewardCard
            category="Prehrana"
            description="15% popusta pri sljedećoj kupnji u bio&bio trgovinama"
          />
          <RewardCard
            category="Trening"
            description="Akcija 3 + 2 gratis mjeseca pretplate u Marjan teretanama "
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
