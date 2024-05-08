import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContext {
  userId: number;
  userName: string;
  userSurname: string;
  streaks: number;
  points: number;
  lasteStreak: Date;
  addUser: ({
    userId,
    userName,
    userSurname,
    streaks,
    points,
    lasteStreak,
  }: {
    userId: number;
    userName: string;
    userSurname: string;
    streaks: number;
    points: number;
    lasteStreak: Date;
  }) => void;
}

const defaultContext: UserContext = {
  userId: 0,
  userName: "",
  userSurname: "",
  streaks: 0,
  points: 0,
  lasteStreak: new Date(),
  addUser: () => {},
};

const UserContext = createContext(defaultContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState(defaultContext.userId);
  const [userName, setUserName] = useState(defaultContext.userName);
  const [userSurname, setUserSurname] = useState(defaultContext.userSurname);
  const [points, setPoints] = useState(defaultContext.points);
  const [streaks, setStreaks] = useState(defaultContext.streaks);
  const [lasteStreak, setLastStreak] = useState(defaultContext.lasteStreak);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const addUser = ({
    userId,
    userName,
    userSurname,
    streaks,
    points,
    lasteStreak,
  }: {
    userId: number;
    userName: string;
    userSurname: string;
    streaks: number;
    points: number;
    lasteStreak: Date;
  }) => {
    setUserId(() => userId);
    setUserName(() => userName);
    setUserSurname(() => userSurname);
    setPoints(points);
    setLastStreak(lasteStreak);
    setStreaks(streaks);
  };

  useEffect(() => {
    console.log("ulazi");
    if (
      lasteStreak.getFullYear() === yesterday.getFullYear() &&
      lasteStreak.getMonth() === yesterday.getMonth() &&
      lasteStreak.getDate() === yesterday.getDate()
    ) {
      console.log("Datum je jučerašnji.");
    } else {
      console.log("Datum nije jučerašnji.");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userId,
        userName,
        userSurname,
        lasteStreak,
        streaks,
        points,
        addUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContext => useContext(UserContext);

export default UserProvider;
