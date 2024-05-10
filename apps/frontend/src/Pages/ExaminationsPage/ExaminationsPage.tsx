import { useEffect, useState } from "react";
import ExaminationCard from "../../components/Examinations/ExaminationCard";
import FilterIcon from "../../components/Examinations/FilterIcon";
import SearchBar from "../../components/Examinations/SearchBar";
import Navbar from "../../components/Other/Navbar";
import classes from "./index.module.css";
import { api } from "../../api";
import { Institution } from "@prisma/client";

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
  time: string;
}

const ExaminationsPage = () => {
  const [examinationsData, setExaminationsData] = useState<Examination[]>([]);
  const [cityNames, setCityNames] = useState<{ [key: number]: string }>({});
  const [searchValue, setSearchValue] = useState("");

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
  }, []);

  const getCityName = async (id: number) => {
    try {
      const response = await api.get<never, Institution[]>(
        `/institutions/cities/${id}`
      );
      return response[0].name;
    } catch (error) {
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

  return (
    <>
      <div className={classes.examinationsPageWrapper}>
        <h1>Preventivni pregledi</h1>

        <div className={classes.examinationsPageLower}>
          <div className={classes.examinationsPageSearch}>
            <SearchBar setSearchValue={setSearchValue} />
            <FilterIcon />
          </div>

          <p>
            Bio si na pregledu? <span>Upiši kod</span> i osvoji 100 bodova.
          </p>

          <div className={classes.examinationsContainer}>
            {examinationsData
              .filter((examination) =>
                examination.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((examination) => (
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
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default ExaminationsPage;
