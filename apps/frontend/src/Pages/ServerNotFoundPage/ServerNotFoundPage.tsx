import classes from "./index.module.css";

const ServerNotFoundPage = () => {
  const backToDashboard = () => {
    window.location.href = "/dashboard";
  };
  return (
    <>
      <div className={classes.serverNotFoundPage}>
        <svg
          onClick={backToDashboard}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g clip-path="url(#clip0_885_1475)">
            <circle cx="20" cy="20" r="20" fill="#BDCDDD" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.658 21.3257C13.2367 20.9038 13 20.3319 13 19.7357C13 19.1394 13.2367 18.5676 13.658 18.1457L22.142 9.65869C22.5641 9.2368 23.1365 8.99986 23.7333 9C24.0288 9.00007 24.3214 9.05834 24.5944 9.17149C24.8674 9.28464 25.1154 9.45044 25.3243 9.65944C25.5332 9.86844 25.6989 10.1165 25.8119 10.3896C25.9249 10.6626 25.983 10.9552 25.983 11.2507C25.9829 11.5462 25.9246 11.8388 25.8115 12.1118C25.6983 12.3848 25.5325 12.6328 25.3235 12.8417L18.431 19.7357L25.325 26.6297C25.54 26.8371 25.7115 27.0853 25.8296 27.3598C25.9476 27.6342 26.0098 27.9295 26.0126 28.2282C26.0153 28.527 25.9585 28.8233 25.8455 29.0998C25.7325 29.3764 25.5656 29.6277 25.3544 29.8391C25.1433 30.0504 24.8921 30.2176 24.6157 30.3309C24.3392 30.4441 24.0429 30.5012 23.7442 30.4987C23.4454 30.4963 23.1502 30.4344 22.8756 30.3166C22.601 30.1988 22.3527 30.0275 22.145 29.8127L13.655 21.3257H13.658Z"
              fill="#083968"
            />
          </g>
          <defs>
            <clipPath id="clip0_885_1475">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <img
          src="./../../../assets/images/logos/ServerNotFound.png"
          alt="404 - server not found illustration"
        />

        <h1>Ups!</h1>
        <p>
          Nešto je pošlo po krivu! <br /> Pokušaj ponovo za nekoliko minuta!
        </p>

        <button onClick={backToDashboard}>Povratak</button>
      </div>
    </>
  );
};

export default ServerNotFoundPage;
