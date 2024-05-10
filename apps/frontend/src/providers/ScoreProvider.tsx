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
  reset: () => void;
}

const defaultContext: ScoreContext = {
  score: 0,
  isCorrect: false,
  isChanged: false,
  toggleMode: () => {},
  reset: () => {},
};

const ScoreContext = createContext(defaultContext);

const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(defaultContext.score);
  const [isCorrect, setIsCorrect] = useState(defaultContext.isCorrect);
  const [isChanged, setIsChanged] = useState(defaultContext.isChanged);

  useEffect(() => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  }, [isChanged]);

  const toggleMode = (value: boolean) => {
    setIsCorrect(value);
    setIsChanged((prev) => !prev);
  };

  const reset = () => {
    console.log("usa");
    setScore(0);
  };

  return (
    <ScoreContext.Provider
      value={{ score, isChanged, reset, isCorrect, toggleMode }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = (): ScoreContext => useContext(ScoreContext);

export default ScoreProvider;
