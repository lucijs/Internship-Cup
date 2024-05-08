import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface StreaksContext {
  streaks: number;
  toggleMode: (value: boolean) => void;
}

const defaultContext: StreaksContext = {
  streaks: 0,
  toggleMode: () => {},
};

const StreaksContext = createContext(defaultContext);

const StreaksProvider = ({ children }: { children: ReactNode }) => {
  const [streaks, setStreaks] = useState(defaultContext.streaks);

  const toggleMode = () => {
    setStreaks((prev) => prev + 1);


  };

  return (
    <StreaksContext.Provider value={{ streaks, toggleMode }}>
      {children}
    </StreaksContext.Provider>
  );
};

export const useScore = (): StreaksContext => useContext(StreaksContext);

export default StreaksProvider;
