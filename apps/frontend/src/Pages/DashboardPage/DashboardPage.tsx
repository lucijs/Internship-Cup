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

        <h3 className={classes.dashboardTitles}>Posebno za tebe</h3>

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

        <h3 className={classes.dashboardTitles}>
          Partneri koji nas podržavaju
        </h3>

        <div className={classes.partnersContainer}>
          <img
            src="./../../assets/images/logos/Croatia_Poliklinika_logo-removebg-preview 1.png"
            alt="Croatia poliklinika logo"
          />
          <img
            src="./../../assets/images/logos/tk-marjan.png"
            alt="Taekwondo klub Marjan logo"
          />
          <img
            src="./../../assets/images/logos/bio-bio-logo.png"
            alt="Bio&Bio logo"
          />
        </div>

        <h3 className={classes.dashboardTitles}>Sponzori</h3>

        <div className={classes.sponsorsContainer}>
          <img
            src="./../../assets/images/logos/poliklinika-medikol-logo.png"
            alt="Poliklinika Medikol logo"
          />
          <img
            src="./../../assets/images/logos/sv-katarina-bolnica-logo.png"
            alt="Specijalna bolnica sv. Katarina logo"
          />
          <img
            src="./../../assets/images/logos/klinika-svjetlost-logo.png"
            alt="Klinika svjtlost logo"
          />
          <img
            src="./../../assets/images/logos/agram-bolnica-logo.png"
            alt="Specijalna bolnica Agram logo"
          />
          <img
            src="./../../assets/images/logos/tvornica-zdrave-hrane-logo.png"
            alt="Tvornica zdrave hrane logo"
          />
          <img
            src="./../../assets/images/logos/soul-food-logo.png"
            alt="Soul food logo"
          />
          <img
            src="./../../assets/images/logos/gyms-4-you-logo.png"
            alt="Gyms 4 You logo"
          />
          <img src="./../../assets/images/logos/xxl-logo.png" alt="XXL logo" />
          <img
            src="./../../assets/images/logos/joker-logo.png"
            alt="Fitness centar Joker logo"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
