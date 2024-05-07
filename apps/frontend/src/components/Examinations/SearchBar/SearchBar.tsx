import { ChangeEvent, useState } from "react";
import classes from "./index.module.css";

const SearchBar = ({
  setSearchValue,
}: {
  setSearchValue: (value: string) => void;
}) => {
  const [searchValue, setSearchValueLocal] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValueLocal(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M24.5 26.25L16.625 18.375C16 18.875 15.2813 19.2708 14.4688 19.5625C13.6563 19.8542 12.7917 20 11.875 20C9.60417 20 7.6825 19.2133 6.11 17.64C4.5375 16.0667 3.75083 14.145 3.75 11.875C3.74917 9.605 4.53583 7.68333 6.11 6.11C7.68417 4.53667 9.60583 3.75 11.875 3.75C14.1442 3.75 16.0663 4.53667 17.6413 6.11C19.2163 7.68333 20.0025 9.605 20 11.875C20 12.7917 19.8542 13.6562 19.5625 14.4688C19.2708 15.2812 18.875 16 18.375 16.625L26.25 24.5L24.5 26.25ZM11.875 17.5C13.4375 17.5 14.7658 16.9533 15.86 15.86C16.9542 14.7667 17.5008 13.4383 17.5 11.875C17.4992 10.3117 16.9525 8.98375 15.86 7.89125C14.7675 6.79875 13.4392 6.25167 11.875 6.25C10.3108 6.24833 8.98292 6.79542 7.89125 7.89125C6.79958 8.98708 6.2525 10.315 6.25 11.875C6.2475 13.435 6.79458 14.7633 7.89125 15.86C8.98792 16.9567 10.3158 17.5033 11.875 17.5Z"
          fill="black"
        />
      </svg>
      <input
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="Pretraživanje"
      />
    </div>
  );
};

export default SearchBar;
