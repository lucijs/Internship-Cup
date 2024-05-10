import { useEffect, useState } from "react";
import DailyAdvice from "../../components/Dashboard/DailyAdvice";
import HighlightedQuiz from "../../components/Dashboard/HighlightedQuiz";
import PointsCard from "../../components/Dashboard/PointsCard";
import RewardCard from "../../components/Dashboard/RewardCard";
import StreakCard from "../../components/Dashboard/StreakCard";
import Navbar from "../../components/Other/Navbar";
import classes from "./index.module.css";
import { api } from "../../api";
import { Category, Institution } from "@prisma/client";
import ExaminationCard from "../../components/Examinations/ExaminationCard";

interface category {
  categoryId: number;
  name: string;
  img: string;
}

interface Examination {
  examinationId: number;
  categories: {
    category: category;
  }[];
  name: string;
  institution: {
    institutionId: number;
    name: string;
  };
  time: string;
}

interface Quiz {
  quizId: number;
  categories: {
    category: category;
  }[];
  description: string;
}

interface Reward {
  rewardId: number;
  title: string;
  description: string;
  message: string;
  category: {
    categoryId: number;
    name: string;
  };
  points: number;
}

const DashboardPage = () => {
  const name = localStorage.getItem("name");
  const [examinationsData, setExaminationsData] = useState<Examination[]>([]);
  const [rewardsData, setRewardsData] = useState<Reward[]>([]);
  const [cityNames, setCityNames] = useState<{ [key: number]: string }>({});
  const [quizzes, setQuizes] = useState<Quiz[]>([]);
  const [quizCategories, setQuizCategories] = useState<{
    [key: number]: string;
  }>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<never, Examination[]>("/examinations");
        setExaminationsData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const fetchDataQuizes = async () => {
      try {
        const response = await api.get<never, Quiz[]>("/quizzes");
        setQuizes(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataQuizes();
  }, []);

  const getCityName = async (id: number) => {
    try {
      const response = await api.get<never, Institution[]>(
        `/institutions/cities/${id}`
      );
      return response[0].name;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  useEffect(() => {
    const getQuizCategory = async () => {
      try {
        let images: { [key: number]: string } = {};
        for (const quiz of quizzes) {
          const response = await api.get<never, Category[]>(
            `quizzes/categories/${quiz.quizId}`
          );
          images[quiz.quizId] = response[0].img;
        }
        setQuizCategories(images);
      } catch {
        return "";
      }
    };
    getQuizCategory();
  }, [quizzes]);

  useEffect(() => {
    const fetchCityNames = async () => {
      const names: { [key: number]: string } = {};
      for (const examination of examinationsData) {
        const cityName = await getCityName(
          examination.institution.institutionId
        );
        names[examination.institution.institutionId] = cityName;
      }
      setCityNames(names);
    };

    fetchCityNames();
  }, [examinationsData]);

  useEffect(() => {
    const fetchRewardsData = async () => {
      try {
        const rewards = await getRewardsData();
        setRewardsData(rewards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRewardsData();
  }, []);

  const write = (array: { category: category }[]) => {
    let output: string = "";
    array.map((element) => {
      if (output === "") {
        output = element.category.name;
      } else {
        output += " ," + element.category.name;
      }
    });
    return output;
  };

  const transformTimeFormat = (dateTime: string) => {
    const dateFormat = dateTime.split("T")[0];
    const timeFormat = dateTime.split("T")[1];
    const hours = timeFormat.split(":")[0];
    const day = dateFormat.split("-")[2];
    const month = dateFormat.split("-")[1];
    const result = `${day}.${month}. u ${hours}h`;
    return result;
  };

  const getRewardsData = async () => {
    const response = await api.get<never, Reward[]>("rewards");
    console.log(response);
    return response;
  };

  return (
    <>
      <div className={classes.dashboardPageWrapper}>
        <h2>Pozdrav, {name}! 👋</h2>

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
          {quizzes.map((quiz) => (
            <HighlightedQuiz
              quizId={quiz.quizId}
              key={quiz.quizId}
              img={quizCategories[quiz.quizId]}
              quizDescription={quiz.description}
            />
          ))}
        </div>

        <h4 className={classes.dashboardSubtitle}>NOVI PREVENTIVNI PREGLEDI</h4>

        <div className={classes.preventiveExaminationsContainer}>
          {examinationsData.map((examination) => (
            <ExaminationCard
              key={examination.examinationId}
              category={
                examination.categories ? write(examination.categories) : ""
              }
              description={examination.name}
              location={
                examination.institution.name +
                ", " +
                cityNames[examination.institution.institutionId]
              }
              time={transformTimeFormat(examination.time)}
            />
          ))}
        </div>

        <h4 className={classes.dashboardSubtitle}>POGODNOSTI NAŠIH PARTNERA</h4>

        <div className={classes.rewardCardsContainer}>
          {rewardsData.map((reward) => (
            <RewardCard
              key={reward.rewardId}
              category={reward.category["name"]}
              description={reward.title}
            />
          ))}

          {/* <RewardCard
            category="Trening"
            description="Akcija 3 + 2 gratis mjeseca pretplate u Marjan teretanama "
          /> */}
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
      <Navbar />
    </>
  );
};

export default DashboardPage;
