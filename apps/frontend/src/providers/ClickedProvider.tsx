import { ReactNode, createContext, useContext, useState } from "react";

interface ScoreContext {
  value: number;
  clicked: (id: number) => void;
}

const defaultContext: ScoreContext = {
  value: 0,
  clicked: () => {},
};

const ClickedContext = createContext(defaultContext);

const ClickedProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(defaultContext.value);

  const clicked = (id: number) => {
    setValue(id);
  };

  return (
    <ClickedContext.Provider value={{ value, clicked }}>
      {children}
    </ClickedContext.Provider>
  );
};

export const useClicked = (): ScoreContext => useContext(ClickedContext);

export default ClickedProvider;
