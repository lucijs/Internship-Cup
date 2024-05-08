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
  lastStreak: Date;
  addUser: ({
    userId,
    userName,
    userSurname,
    streaks,
    points,
    lastStreak,
  }: {
    userId: number;
    userName: string;
    userSurname: string;
    streaks: number;
    points: number;
    lastStreak: Date;
  }) => void;
  addPoints: (value: number) => void;
  addStreak: () => void;
}

const defaultContext: UserContext = {
  userId: 0,
  userName: "",
  userSurname: "",
  streaks: 0,
  points: 0,
  lastStreak: new Date(),
  addUser: () => {},
  addPoints: () => {},
  addStreak: () => {},
};

const UserContext = createContext(defaultContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState(defaultContext.userId);
  const [userName, setUserName] = useState(defaultContext.userName);
  const [userSurname, setUserSurname] = useState(defaultContext.userSurname);
  const [points, setPoints] = useState(defaultContext.points);
  const [streaks, setStreaks] = useState(defaultContext.streaks);
  const [lastStreak, setLastStreak] = useState(defaultContext.lastStreak);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const addUser = ({
    userId,
    userName,
    userSurname,
    streaks,
    points,
    lastStreak,
  }: {
    userId: number;
    userName: string;
    userSurname: string;
    streaks: number;
    points: number;
    lastStreak: Date;
  }) => {
    setUserId(() => userId);
    setUserName(() => userName);
    setUserSurname(() => userSurname);
    setPoints(points);
    setLastStreak(lastStreak);
    setStreaks(streaks);
  };

  const addPoints = (numberOfPoints: number) => {
    setPoints((prev) => prev + numberOfPoints);
  };

  const addStreak = () => {
    setStreaks((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("ulazi");
    if (
      !(
        lastStreak.getFullYear() === yesterday.getFullYear() &&
        lastStreak.getMonth() === yesterday.getMonth() &&
        lastStreak.getDate() === yesterday.getDate()
      )
    )
      setStreaks(() => 0);
  }, [lastStreak]);

  return (
    <UserContext.Provider
      value={{
        userId,
        userName,
        userSurname,
        lastStreak,
        streaks,
        points,
        addUser,
        addPoints,
        addStreak,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContext => useContext(UserContext);

export default UserProvider;
