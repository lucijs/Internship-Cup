import { useEffect, useState } from "react";
import ExaminationCard from "../../components/Examinations/ExaminationCard";
import FilterIcon from "../../components/Examinations/FilterIcon";
import SearchBar from "../../components/Examinations/SearchBar";
import Navbar from "../../components/Other/Navbar";
import classes from "./index.module.css";

interface category {
  categoryId: number;
  name: string;
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
}

const ExaminationsPage = () => {
  const [examinationsData, setExaminationsData] = useState<Examination[]>([]);
  const [cityNames, setCityNames] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/backend/examinations");
        if (!res.ok) throw new Error("Failed to fetch examinations");

        const data = await res.json();
        console.log(data[0].categories[0].category.name);
        setExaminationsData(data);
      } catch (error) {
        console.error("Error fetching examinations:", error);
      }
    };

    fetchData();
  }, []);

  const getCityName = async (id: number) => {
    try {
      const res = await fetch(`/backend/institutions/cities/${id}`);
      if (!res.ok) throw new Error("Failed to fetch institution city");

      const data = await res.json();

      return data[0].name;
    } catch (error) {
      console.error("Error fetching institution city: ", error);
      return "";
    }
  };

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

  const write = (array: { category: category }[]) => {
    let output: string = "";
    array.map((element) => {
      if (output === "") {
        output = element.category.name;
      } else {
        output += " ," + element.category.name;
      }
      console.log(output);
    });
    return output;
  };

  return (
    <>
      <div className={classes.examinationsPageWrapper}>
        <h1>Preventivni pregledi</h1>

        <div className={classes.examinationsPageLower}>
          <div className={classes.examinationsPageSearch}>
            <SearchBar />
            <FilterIcon />
          </div>

          <p>
            Bio si na pregledu? <span>Upiši kod</span> i osvoji 100 bodova.
          </p>

          <div className={classes.examinationsContainer}>
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
                time=""
              />
            ))}
          </div>

          {/*
            <div className={classes.examinationsContainer}>
              <ExaminationCard
                category="Stomatologija"
                description="Besplatan pregled oralnog zdravlja"
                location="gornji grad, Osijek"
                time="22.5. (Srijeda) u 8h"
              />
              <ExaminationCard
                category="Dermatologija"
                description="Besplatan pregled madeža"
                location="Đardin, Split"
                time="26.5. (Subota) u 10h"
              />
              <ExaminationCard
                category="Stomatologija"
                description="Besplatan pregled oralnog zdravlja"
                location="gornji grad, Osijek"
                time="22.5. (Srijeda) u 8h"
              />

              <ExaminationCard
                category="Stomatologija"
                description="Besplatan pregled oralnog zdravlja"
                location="gornji grad, Osijek"
                time="22.5. (Srijeda) u 8h"
              />

              <ExaminationCard
                category="Dermatologija"
                description="Besplatan pregled madeža"
                location="Đardin, Split"
                time="26.5. (Subota) u 10h"
              />
            </div>
          */}
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default ExaminationsPage;
