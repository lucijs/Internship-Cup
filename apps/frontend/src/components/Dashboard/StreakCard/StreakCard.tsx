import classes from "./index.module.css";

const StreakCard = () => {
  return (
    <div className={classes.streakCard}>
      <h4>STREAK</h4>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M28.276 13.3155C27.6129 11.616 26.5565 10.2995 25.2185 9.49809C24.9098 10.0914 24.5416 10.6517 24.1195 11.1704C24.1219 11.1718 24.1243 11.173 24.1267 11.1743C26.1193 12.3195 27.2782 15.2461 26.9449 18.2913C26.3928 23.3363 24.8605 26.794 22.6302 28.0272C21.1802 28.8289 19.3718 28.7147 17.2552 27.6882L17.0484 27.5882H15.5241L15.3174 27.6882C13.2007 28.7148 11.3924 28.8289 9.94241 28.0272C7.71209 26.794 6.17991 23.3363 5.62766 18.2913C5.29441 15.2461 6.45334 12.3195 8.44584 11.1743C9.08767 10.8078 9.8155 10.6186 10.5546 10.6263C12.0635 10.6263 13.8025 11.3333 15.6921 12.7298L15.7595 12.7798C15.7595 12.7798 18.4834 12.4487 19.5625 11.9587C22.8138 10.4827 23.5313 8.13646 23.6585 7.81784C24.0336 6.88701 24.221 5.89124 24.2101 4.88775C24.1991 3.88426 23.99 2.89283 23.5947 1.9704L23.3402 1.33484L22.6558 1.34171C21.5737 1.35357 20.5063 1.5942 19.5237 2.04779C18.5411 2.50138 17.6656 3.15767 16.9547 3.97358C16.2437 4.78949 15.7133 5.74655 15.3984 6.78194C15.0835 7.81733 14.9912 8.90761 15.1275 9.98121C13.9462 9.31934 12.7976 8.89728 11.6972 8.72246C10.1383 8.47465 8.70903 8.71621 7.44922 9.44034C6.06559 10.2356 4.97541 11.5756 4.29659 13.3153C3.67947 14.897 3.44609 16.7414 3.63947 18.5087C4.27334 24.3013 6.11816 28.1979 8.97453 29.7775C9.91307 30.2982 10.97 30.5682 12.0433 30.5614C13.2673 30.5614 14.5826 30.2368 15.9792 29.588H16.5936C19.2432 30.8188 21.5989 30.8828 23.598 29.7775C26.4543 28.198 28.2993 24.3014 28.9332 18.5087C29.1265 16.7415 28.8931 14.8972 28.276 13.3155ZM20.5012 3.80159C20.9739 3.59813 21.4721 3.4601 21.982 3.39134C22.2086 4.17478 22.2636 4.99785 22.1434 5.80448C22.0232 6.61111 21.7305 7.38236 21.2853 8.06568C20.8401 8.74899 20.2529 9.32833 19.5636 9.76423C18.8743 10.2001 18.0992 10.4823 17.291 10.5917C16.9074 9.26306 17.0218 7.84013 17.6129 6.58994C18.204 5.33975 19.231 4.34826 20.5012 3.80159Z"
            fill="black"
          />
        </svg>
        152
      </span>
      <h4>DANA</h4>
    </div>
  );
};

export default StreakCard;