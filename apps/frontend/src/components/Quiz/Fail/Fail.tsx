import { Button } from "@mui/material";
import classes from "./index.module.css";

const Fail = () => {
  return (
    <div className={classes.body}>
      <div className={classes.titleBox}>
        <div className={classes.title}>Kviz je uspješno dovršen!</div>
        <div className={classes.subtitle}>Više sreće drugi put!</div>
      </div>
      <div className={classes.resault}>
        <div>Rezultat</div>
        <div>0/3</div>
      </div>
      <div className={classes.logoBox}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="246"
          height="246"
          viewBox="0 0 246 246"
          fill="none">
          <circle
            cx="123"
            cy="123"
            r="123"
            fill="#93B6EB"
            className={classes.circle}
          />
        </svg>
        <svg
          width="267"
          height="244"
          viewBox="0 0 267 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.logo}>
          <path
            d="M46.0691 189.118C46.7436 189.446 47.4146 189.789 48.1263 190.032C48.2422 190.072 49.8513 190.477 49.7087 190.56C48.7775 191.103 47.2198 191.094 46.1746 191.017C45.4239 190.961 48.9743 190.209 48.2318 190.085C47.4922 189.962 46.2296 189.882 45.5592 190.243C44.7664 190.67 43.1298 190.997 45.0845 191.017C47.0995 191.038 49.4643 190.667 51.4494 191.017C52.2 191.149 49.9593 191.339 49.2164 191.509C48.9223 191.577 46.2098 191.946 46.2098 192.582C46.2098 193.177 56.4546 190.295 57.3572 190.173C57.8452 190.107 59.3244 190.092 58.8341 190.138C56.5324 190.354 54.2142 190.346 51.9065 190.454C50.44 190.523 48.9792 190.647 47.5109 190.683C46.624 190.704 45.9904 190.7 45.1372 190.7C44.5998 190.7 44.9254 190.705 45.524 190.665C47.4308 190.538 49.3335 190.359 51.2384 190.208C52.2467 190.128 55.185 189.547 54.2626 189.962C53.8369 190.154 52.5672 190.585 53.0318 190.63C55.1799 190.84 58.0323 189.633 59.9594 188.872C60.929 188.489 63.4028 187.597 62.5089 187.061C61.274 186.32 57.0447 188.295 55.8802 188.59C53.9692 189.075 48.2298 190.378 50.0604 189.645C52.0187 188.862 54.2352 188.411 56.2671 187.834C58.106 187.313 56.2438 188.119 55.9857 188.239C54.9243 188.732 53.7149 188.987 52.6802 189.505C51.7573 189.966 54.6463 188.852 55.5637 188.38C56.946 187.668 56.5056 187.881 55.4231 188.59C54.3829 189.272 53.3269 189.949 52.223 190.525C51.4732 190.916 53.7859 189.869 54.5967 189.628C56.5075 189.061 57.1695 188.894 55.4934 190.243C54.1502 191.324 56.9401 189.598 57.322 189.364C57.411 189.31 54.0885 190.698 54.2275 190.665C55.1514 190.448 57.1493 189.784 54.8956 191.052C53.6453 191.755 50.3332 194.013 50.9219 192.705C51.2668 191.938 53.2483 191.408 53.9461 191.158C54.1197 191.095 55.1543 190.639 54.6494 191.263C54.2766 191.724 52.8265 192.714 53.3835 192.511C54.4748 192.115 55.5991 191.931 56.7242 191.65C57.0747 191.562 58.4908 190.795 57.744 191.58C55.5663 193.866 58.6069 192.298 59.6429 191.544C62.4869 189.476 55.9803 191.723 55.1769 191.843C53.8714 192.039 57.7907 188.993 58.2011 189.329C58.4079 189.498 56.7641 191.258 56.6187 191.404C56.3072 191.715 58.3707 188.796 58.4825 188.626C59.4261 187.183 60.298 185.694 61.2078 184.23C61.7045 183.431 59.0175 186.283 58.8869 186.41C57.9979 187.274 55.8167 190.021 56.0385 188.801C56.2483 187.647 58.4391 186.071 59.1858 185.355C59.8638 184.705 60.9917 183.284 61.9287 182.894C63.0661 182.42 60.8982 185.145 60.2056 186.164C57.6468 189.929 60.9262 184.714 61.577 183.738"
            stroke="#FF5858"
            strokeLinecap="round"
          />
          <path
            d="M83.0924 172.229C82.3306 173.061 81.5743 173.797 80.6665 174.47C79.8857 175.05 78.9249 175.56 78.2975 176.324C78.119 176.541 78.0896 176.794 78.4825 176.768C79.7713 176.683 81.1611 175.862 82.2316 175.21C82.5719 175.003 83.3076 174.583 83.5299 174.175C83.6061 174.036 83.0563 174.215 83.0497 174.218C81.0633 175.065 79.4399 176.679 77.7213 177.935C75.9165 179.254 73.8433 180.088 71.8806 181.129C71.3001 181.437 70.7733 181.811 70.2088 182.143C69.6494 182.471 69.0374 182.707 68.5121 183.093C68.1152 183.384 67.7651 183.731 67.3632 184.018C66.3719 184.724 65.2802 185.269 64.2045 185.832C63.6391 186.127 63.0731 186.48 62.4473 186.635C61.9116 186.769 61.3572 186.818 60.8253 186.97C59.3891 187.379 58.384 188.646 56.8983 188.976C56.7551 189.008 56.4416 189.023 56.3577 189.186C56.1736 189.543 56.4309 189.847 56.7952 189.887C57.7027 189.984 59.0507 189.795 59.8649 189.673C60.9123 189.516 62.0641 189.32 63.0698 188.933C63.7307 188.68 64.2199 188.092 64.8448 187.756C66.0164 187.125 67.1446 186.691 68.1813 185.832C68.5809 185.5 68.9653 185.16 69.4085 184.885C70.0048 184.517 70.6411 184.233 71.2154 183.825C71.8557 183.371 72.4897 182.908 73.1184 182.438C73.5211 182.137 74.1448 181.962 74.0006 181.385"
            stroke="#FF5858"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M95.6405 154.293C98.9333 144.415 74.3742 138.172 61.6831 134.742V137.829C60.9971 139.201 57.5671 141.945 49.335 141.945C41.1029 141.945 39.7309 127.539 40.0739 120.336C40.0739 117.592 39.6623 109.634 38.0159 99.7559C36.3695 89.8774 31.8418 92.2098 29.7838 94.6108L22.5807 102.843L19.4937 64.7695C19.4937 67.1706 17.6415 73.2074 10.2326 78.1467C0.971524 84.3207 2.48202 120.336 2.482 132C2.48199 141.204 20.4822 203.5 54.4822 188.5C88.4822 173.5 91.5245 166.642 95.6405 154.293Z"
            fill="#FF5858"
          />
          <path
            d="M12.29 111.075C12.29 105.975 13.9365 95.1297 20.5221 92.5527"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.17407 98.7273C8.17407 97.7524 8.92244 84.1045 16.4062 80.2051"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            width="10.0477"
            height="56.6002"
            rx="2"
            transform="matrix(0.994397 -0.105709 0.0996983 0.995018 15.0012 58.6279)"
            fill="#294669"
          />
          <path
            d="M61.6827 137.204C56.343 144.494 40.1035 145.123 40.1035 126.442C40.1035 103.091 40.1035 98.7663 35.9928 94.442C31.882 90.1177 26.9492 91.8475 29.4156 114.334"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.2383 71.9727C4.6673 79.1109 2.68853 92.1977 3.27053 97.8488C-6.5069 178.511 42.7511 200.461 61.9568 191.538C69.2316 188.267 86.2674 177.496 92.5529 168.93"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M152.907 50.1952C145.051 55.1384 135.885 55.6876 132.284 55.3444C93.0028 46.0759 76.3081 45.0461 56.6674 71.8216C35.0374 101.309 55.6854 192.312 148.979 195.401C228.696 198.041 243.254 101.687 219.685 69.762C196.117 37.8373 162.727 44.0162 152.907 50.1952Z"
            fill="#FF5858"
            stroke="#AA3E3E"
            strokeWidth="2.5"
          />
          <path
            d="M217.393 216.872C285.012 187.586 250.835 129.672 225.686 104.617C208.431 109.002 211.034 137.861 214.493 151.742C217.331 159.631 221.342 179.819 203.178 175.461C180.473 170.013 185.378 228.448 185.724 232.223C186.069 235.992 218.305 240.165 217.393 216.872Z"
            fill="#FF5858"
          />
          <path
            d="M214.343 218.146C286.019 189.297 251.205 130.04 225.686 104.617C208.431 109.002 211.034 137.861 214.493 151.742C217.331 159.631 221.342 179.819 203.178 175.461C180.473 170.013 185.378 228.448 185.724 232.223C186.07 235.998 218.402 240.177 217.389 216.767"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M197.936 221.354C197.764 222.439 199.646 231.626 198.048 234.707"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M207.123 219.474C206.951 220.558 208.833 229.745 207.235 232.826"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M90.1649 109.018C89.7443 109.018 90.1339 109.3 90.3221 109.018"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M81.7451 119.895C81.7612 119.824 81.8093 119.24 81.9416 119.314C82.0743 119.388 82.0595 119.53 82.0595 119.659"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M100.602 116.536C100.588 116.291 100.435 116.068 100.76 115.986"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M184.803 113.133C184.803 113.595 184.808 113.923 184.575 114.273"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M170.24 124.356H170.468"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M198.981 123.423C199.134 123.597 199.069 123.703 199.209 123.423"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M183.563 31.3042C189.345 25.2402 196.298 26.2508 199.052 27.5142C197.4 15.3861 188.038 8.14288 183.563 6.03731C146.389 -16.7029 118.509 64.1512 132.965 61.6245C147.422 59.0978 176.335 38.8843 183.563 31.3042Z"
            fill="#69AE78"
          />
          <path
            d="M199.052 27.5142L200.291 27.3454C200.352 27.7972 200.163 28.2467 199.797 28.5183C199.43 28.7898 198.945 28.8404 198.531 28.6503L199.052 27.5142ZM183.563 31.3042L184.467 32.1668L183.563 31.3042ZM183.563 6.03731L183.031 7.16834L182.969 7.13926L182.911 7.10362L183.563 6.03731ZM198.531 28.6503C196.133 27.5503 189.793 26.5825 184.467 32.1668L182.658 30.4416C188.898 23.8978 196.464 24.9514 199.573 26.378L198.531 28.6503ZM184.467 32.1668C180.746 36.0696 171.607 43.0832 161.645 49.4143C156.649 52.5899 151.411 55.6155 146.501 58.0104C141.61 60.3961 136.968 62.1939 133.18 62.8558L132.75 60.3932C136.191 59.7918 140.583 58.1154 145.405 55.7635C150.208 53.4208 155.362 50.4456 160.304 47.3044C170.22 41.0021 179.152 34.1189 182.658 30.4416L184.467 32.1668ZM133.18 62.8558C131.994 63.0632 130.885 62.8548 129.979 62.1567C129.111 61.4873 128.578 60.4807 128.262 59.3714C127.635 57.1742 127.722 54.0882 128.312 50.5987C129.502 43.5605 132.853 34.2619 137.819 25.6276C142.778 17.0052 149.434 8.89666 157.322 4.39874C165.295 -0.147922 174.497 -0.973848 184.215 4.971L182.911 7.10362C174.042 1.67835 165.818 2.43161 158.56 6.57045C151.217 10.758 144.836 18.4413 139.986 26.8741C135.143 35.2949 131.91 44.3148 130.777 51.0155C130.205 54.3955 130.195 57.034 130.666 58.6861C130.898 59.5014 131.212 59.9506 131.506 60.1769C131.762 60.3745 132.129 60.5017 132.75 60.3932L133.18 62.8558ZM184.095 4.90627C188.806 7.12279 198.562 14.6583 200.291 27.3454L197.813 27.6829C196.237 16.1138 187.27 9.16296 183.031 7.16834L184.095 4.90627Z"
            fill="#326A3E"
          />
          <path
            d="M181.559 17.4362C174.356 15.0352 154.393 20.3174 132.167 60.6546"
            stroke="#326A3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M109.737 100.412C110.362 99.844 112.076 98.6148 112.958 99.2823C114.974 98.4916 115.99 100.41 116.691 102.161C117.732 104.765 117.136 109.64 115.734 112.031C114.534 114.079 111.706 113.735 110.53 111.971C109.556 110.511 108.681 108.913 108.631 107.096C108.571 104.952 108.017 101.976 109.737 100.412Z"
            fill="#AA3E3E"
          />
          <path
            d="M113.207 99.5595C112.45 98.3484 110.428 99.7841 109.737 100.412C108.017 101.976 108.571 104.952 108.631 107.096C108.681 108.913 109.556 110.511 110.53 111.971C111.706 113.735 114.534 114.079 115.734 112.031C117.136 109.64 117.732 104.765 116.691 102.161C115.988 100.404 114.967 98.4786 112.938 99.2903"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M152.167 100.05C152.791 99.4817 154.506 98.2525 155.387 98.92C157.403 98.1293 158.42 100.048 159.12 101.799C160.162 104.403 159.565 109.278 158.163 111.669C156.963 113.716 154.135 113.372 152.959 111.609C151.986 110.148 151.111 108.551 151.06 106.734C151.001 104.59 150.446 101.614 152.167 100.05Z"
            fill="#AA3E3E"
          />
          <path
            d="M155.636 99.1972C154.879 97.9861 152.857 99.4218 152.167 100.05C150.446 101.614 151.001 104.59 151.06 106.734C151.111 108.551 151.986 110.148 152.959 111.609C154.135 113.372 156.963 113.716 158.163 111.669C159.565 109.278 160.162 104.403 159.12 101.799C158.417 100.042 157.396 98.1163 155.367 98.928"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M149.008 85.5244C153.445 90.1088 160.124 91.3367 166.257 91.3367"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M116.731 88.4365C113.555 93.3063 108.774 94.6106 104.383 94.6106"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M127.021 128.478C129.212 127.65 131.574 127.55 133.896 127.54C137.387 127.525 141.137 127.63 144.521 128.519C147.066 129.189 149.754 130.009 151.958 131.478"
            stroke="#AA3E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Button className={classes.button}>Povratak na kvizove</Button>
    </div>
  );
};

export default Fail;