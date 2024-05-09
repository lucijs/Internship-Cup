import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: number;
  name: string;
  surname: string;
  streaks: number;
  points: number;
  lastStreak: Date | null;
}

interface UserContext {
  user: User;
  addUser: ({
    id,
    name,
    surname,
    streaks,
    points,
    lastStreak,
  }: {
    id: number;
    name: string;
    surname: string;
    streaks: number;
    points: number;
    lastStreak: Date | null;
  }) => void;
  addPoints: (value: number) => void;
  addStreak: () => void;
}

const defaultContext: UserContext = {
  user: {
    id: 0,
    name: "",
    surname: "",
    streaks: 0,
    points: 0,
    lastStreak: new Date(),
  },
  addUser: () => {},
  addPoints: () => {},
  addStreak: () => {},
};

const UserContext = createContext(defaultContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(defaultContext.user);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const addUser = ({
    id,
    name,
    surname,
    streaks,
    points,
    lastStreak,
  }: {
    id: number;
    name: string;
    surname: string;
    streaks: number;
    points: number;
    lastStreak: Date | null;
  }) => {
    setUser({
      id,
      name,
      surname,
      streaks,
      points,
      lastStreak,
    });
    console.log(name);
    console.log(lastStreak);
    console.log(id);
  };

  const addPoints = (numberOfPoints: number) => {
    //setPoints((prev) => prev + numberOfPoints);
  };

  const addStreak = () => {
    // setStreaks((prev) => prev + 1);
    // setLastStreak(new Date());
  };

  useEffect(() => {
    console.log(user["surname"]);
    console.log(user["id"]);
    /*console.log(lastStreak);
    if (lastStreak !== undefined && lastStreak)
      if (
        !(
          lastStreak.getFullYear() === yesterday.getFullYear() &&
          lastStreak.getMonth() === yesterday.getMonth() &&
          lastStreak.getDate() === yesterday.getDate()
        )
      )
        setStreaks(() => 0);*/
  });

  return (
    <UserContext.Provider
      value={{
        user,
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
