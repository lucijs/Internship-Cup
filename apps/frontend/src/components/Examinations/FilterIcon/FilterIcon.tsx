import classes from "./index.module.css";

const FilterIcon = () => {
  return (
    <>
      <div className={classes.filterIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M23.2444 5.25L16.8054 13.5H15.9999V15V24.3912L13.9999 22.3912V22.3375V15V13.5H13.1945L6.75545 5.25H23.2444Z"
            fill="black"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>
    </>
  );
};

export default FilterIcon;
