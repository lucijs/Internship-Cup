import { Button } from "@mui/material";
import classes from "./index.module.css";

const QuizSuccessWithoutStreak = () => {
  //treba povezat na kontekst da od tamo primi podatke
  const streaks = 3;
  return (
    <>
      <div className={classes.title}>Kviz je uspješno dovršen!</div>
      <div className={classes.container}>
        <div className={classes.resault}>
          <div>Rezultat</div>
          <div>{streaks}/3</div>
        </div>
        <div className={classes.resault}>
          <div>Osvojeni bodovi</div>
          <div className={classes.points}>
            <div>+10</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none">
              <path
                d="M12.2042 7.71099C13.8935 4.68166 14.7375 3.16699 16.0002 3.16699C17.2628 3.16699 18.1068 4.68166 19.7962 7.71099L20.2335 8.49499C20.7135 9.35633 20.9535 9.78699 21.3268 10.071C21.7001 10.355 22.1668 10.4603 23.1002 10.671L23.9482 10.863C27.2282 11.6057 28.8668 11.9763 29.2575 13.231C29.6468 14.4843 28.5295 15.7923 26.2935 18.407L25.7148 19.083C25.0802 19.8257 24.7615 20.1977 24.6188 20.6563C24.4762 21.1163 24.5242 21.6123 24.6202 22.603L24.7082 23.5057C25.0455 26.995 25.2148 28.739 24.1935 29.5137C23.1722 30.2897 21.6362 29.5817 18.5668 28.1683L17.7708 27.803C16.8988 27.4003 16.4628 27.2003 16.0002 27.2003C15.5375 27.2003 15.1015 27.4003 14.2295 27.803L13.4348 28.1683C10.3642 29.5817 8.82815 30.2883 7.80815 29.515C6.78548 28.739 6.95482 26.995 7.29215 23.5057L7.38015 22.6043C7.47615 21.6123 7.52415 21.1163 7.38015 20.6577C7.23882 20.1977 6.92015 19.8257 6.28548 19.0843L5.70682 18.407C3.47082 15.7937 2.35348 14.4857 2.74282 13.231C3.13348 11.9763 4.77348 11.6043 8.05348 10.863L8.90148 10.671C9.83348 10.4603 10.2988 10.355 10.6735 10.071C11.0468 9.78699 11.2868 9.35633 11.7668 8.49499L12.2042 7.71099Z"
                fill="#F5B943"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={classes.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="246"
          height="246"
          viewBox="0 0 246 246"
          fill="none">
          <circle cx="123" cy="123" r="123" fill="#EAD8B5" />
        </svg>
      </div>
      <Button className={classes.button}>Skupi bodova</Button>
    </>
  );
};

export default QuizSuccessWithoutStreak;
