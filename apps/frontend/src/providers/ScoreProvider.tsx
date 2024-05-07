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
  toggleMode: (value: boolean) => void;
}

const defaultContext: ScoreContext = {
  score: 0,
  isCorrect: false,
  toggleMode: () => {},
};

const ScoreContext = createContext(defaultContext);

const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(defaultContext.score);
  const [isCorrect, setIsCorrect] = useState(defaultContext.isCorrect);

  useEffect(() => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      console.log("triba bi bit za jedan veci");
    }
  }, [isCorrect]);

  const toggleMode = (value: boolean) => {
    setIsCorrect(value);
    console.log("triba bi bit true");
  };

  return (
    <ScoreContext.Provider value={{ score, isCorrect, toggleMode }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = (): ScoreContext => useContext(ScoreContext);

export default ScoreProvider;
