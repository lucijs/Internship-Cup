import classes from "./index.module.css";

const DailyAdvice = () => {
  return (
    // <div className={classes.dailyAdviceWrapper}>
    //   <div className={classes.dailyAdviceUpper}>
    //     <h5>SAVJET DANA</h5>
    //     <h2>"</h2>
    //   </div>

    //   <p className={classes.dailyAdviceText}>
    //     Smij se uvijek, to je najbolji način da pobijediš sve bolesti!
    //   </p>
    // </div>
    <div className={classes.dailyAdviceWrapper}>
      <div className={classes.dailyAdviceUpper}>
        <h4>SAVJET DANA</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <g clip-path="url(#clip0_365_2693)">
            <path
              d="M21.0693 34.1767V28.0031C21.0693 27.1655 21.7483 26.487 22.5854 26.487C25.5726 26.487 27.1977 23.4234 27.4233 17.3757H22.5854C21.7484 17.3757 21.0693 16.6963 21.0693 15.8596V2.82373C21.0693 1.98638 21.7483 1.30791 22.5854 1.30791H35.4838C36.3207 1.30791 37 1.98712 37 2.82373V15.8597C37 18.7585 36.7074 21.4186 36.1329 23.7679C35.5427 26.1763 34.6368 28.2819 33.4408 30.0268C32.2109 31.8198 30.671 33.2269 28.8667 34.2068C27.0487 35.193 24.9354 35.6935 22.5848 35.6935C21.7484 35.6928 21.0693 35.0137 21.0693 34.1767ZM1.51581 26.4865C0.678782 26.4865 0 27.1655 0 28.002V34.1768C0 35.0137 0.678782 35.6923 1.51581 35.6923C3.86527 35.6923 5.97962 35.1917 7.79646 34.2057C9.60174 33.2258 11.1414 31.8199 12.3712 30.0256C13.5679 28.2807 14.4737 26.1751 15.0639 23.7655C15.6387 21.4162 15.9307 18.7559 15.9307 15.8584V2.82245C15.9307 1.98511 15.2513 1.30664 14.4146 1.30664H1.51581C0.678782 1.30664 0 1.98574 0 2.82245V15.8584C0 16.6956 0.678782 17.3745 1.51581 17.3745H6.28573C6.06293 23.4227 4.46127 26.4865 1.51581 26.4865Z"
              fill="#93B6EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_365_2693">
              <rect width="37" height="37" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <blockquote>
        Smij se uvijek, to je najbolji način da pobijediš sve bolesti
      </blockquote>
    </div>
  );
};

export default DailyAdvice;
