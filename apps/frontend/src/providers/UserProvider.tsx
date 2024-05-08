import { ReactNode, createContext, useContext, useState } from "react";

interface UserContext {
  id: number;
  name: string;
  surname: string;
  toggleMode: ({
    id,
    name,
    surname,
  }: {
    id: number;
    name: string;
    surname: string;
  }) => void;
}

const defaultContext: UserContext = {
  id: 0,
  name: "",
  surname: "",
  toggleMode: () => {},
};

const UserContext = createContext(defaultContext);

const StreaksProvider = ({ children }: { children: ReactNode }) => {
  const [id, setId] = useState(defaultContext.id);
  const [name, setName] = useState(defaultContext.name);
  const [surname, setSurname] = useState(defaultContext.surname);

  const toggleMode = ({
    id,
    name,
    surname,
  }: {
    id: number;
    name: string;
    surname: string;
  }) => {
    setId(id);
    setName(name);
    setSurname(surname);
  };

  return (
    <UserContext.Provider value={{ id, name, surname, toggleMode }}>
      {children}
    </UserContext.Provider>
  );
};

export const useScore = (): UserContext => useContext(UserContext);

export default StreaksProvider;
