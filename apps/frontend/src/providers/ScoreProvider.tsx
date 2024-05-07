import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ScoreContext {
  score: number;
  isCorrect: boolean;
  isChanged: boolean;
  toggleMode: (value: boolean) => void;
}

const defaultContext: ScoreContext = {
  score: 0,
  isCorrect: false,
  isChanged: false,
  toggleMode: () => {},
};

const ScoreContext = createContext(defaultContext);

const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(defaultContext.score);
  const [isCorrect, setIsCorrect] = useState(defaultContext.isCorrect);
  const [isChanged, setIsChanged] = useState(defaultContext.isChanged);

  useEffect(() => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      console.log("triba bi bit za jedan veci");
    }
  }, [isChanged]);

  const toggleMode = (value: boolean) => {
    setIsCorrect(value);
    console.log("triba bi bit true");
    setIsChanged((prev) => !prev);
  };

  return (
    <ScoreContext.Provider value={{ score, isChanged, isCorrect, toggleMode }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = (): ScoreContext => useContext(ScoreContext);

export default ScoreProvider;
