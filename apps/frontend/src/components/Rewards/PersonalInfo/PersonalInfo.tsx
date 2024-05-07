import classes from "./index.module.css";

const PersonalInfo = () => {
  return (
    <>
      <div className={classes.personalInfoWrapper}>
        <h1>Marko Markić</h1>
        <h4>26, Split, Splitsko-dalmatinska</h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.5 5V3M7.5 5V3M3.25 8H20.75M3 10.044C3 7.929 3 6.871 3.436 6.063C3.83003 5.34214 4.44184 4.76427 5.184 4.412C6.04 4 7.16 4 9.4 4H14.6C16.84 4 17.96 4 18.816 4.412C19.569 4.774 20.18 5.352 20.564 6.062C21 6.872 21 7.93 21 10.045V14.957C21 17.072 21 18.13 20.564 18.938C20.17 19.6589 19.5582 20.2367 18.816 20.589C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.588C4.44199 20.236 3.83019 19.6585 3.436 18.938C3 18.128 3 17.07 3 14.955V10.044Z"
              stroke="#083968"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h4>Član od 2. 12. 2023.</h4>
        </span>

        <h2>Tvoja statistika</h2>
      </div>
    </>
  );
};

export default PersonalInfo;
