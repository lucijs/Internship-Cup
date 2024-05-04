import FilterIcon from "../../components/Examinations/FilterIcon";
import SearchBar from "../../components/Examinations/SearchBar";
import classes from "./index.module.css";

const ExaminationsPage = () => {
  return (
    <>
      <div className={classes.examinationsPageWrapper}>
        <h1>Preventivni pregledi</h1>

        <div className={classes.examinationsPageLower}>
          <div className={classes.examinationsPageSearch}>
            <SearchBar />
            <FilterIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExaminationsPage;
