import classes from "./index.module.css";

const PointsCard = () => {
  return (
    <>
      <div className={classes.pointsCard}>
        <span className={classes.pointsCardUpper}>
          <h4>BODOVI</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M12.299 9.08961C13.946 6.3632 14.7689 5 16 5C17.2311 5 18.054 6.3632 19.701 9.08961L20.1274 9.79521C20.5954 10.5704 20.8294 10.958 21.1934 11.2136C21.5574 11.4692 22.0124 11.564 22.9223 11.7536L23.7491 11.9264C26.947 12.5948 28.5447 12.9284 28.9256 14.0576C29.3052 15.1856 28.2158 16.3628 26.0358 18.716L25.4716 19.3244C24.8528 19.9928 24.5421 20.3276 24.403 20.7404C24.2639 21.1544 24.3107 21.6008 24.4043 22.4925L24.4901 23.3049C24.819 26.4453 24.9841 28.0149 23.9883 28.7121C22.9925 29.4105 21.495 28.7733 18.5024 27.5013L17.7264 27.1725C16.8762 26.8101 16.4511 26.6301 16 26.6301C15.5489 26.6301 15.1238 26.8101 14.2736 27.1725L13.4989 27.5013C10.505 28.7733 9.00746 29.4093 8.01299 28.7133C7.01591 28.0149 7.18101 26.4453 7.5099 23.3049L7.5957 22.4937C7.6893 21.6008 7.73609 21.1544 7.5957 20.7416C7.4579 20.3276 7.14721 19.9928 6.52842 19.3256L5.96424 18.716C3.78419 16.364 2.69481 15.1868 3.0744 14.0576C3.45529 12.9284 5.05426 12.5936 8.25218 11.9264L9.07896 11.7536C9.98764 11.564 10.4413 11.4692 10.8066 11.2136C11.1706 10.958 11.4046 10.5704 11.8726 9.79521L12.299 9.08961Z"
              fill="#F5B943"
              stroke="#F5B943"
              stroke-width="1.5"
            />
          </svg>
        </span>

        <span className={classes.pointsCardLower}>1038</span>
      </div>
    </>
  );
};

export default PointsCard;
