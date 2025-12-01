import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const updateName = (value) => {
    setName(value);
    localStorage.setItem("name", value); 
  };

  return (
    <GlobalContext.Provider value={{ name, updateName }}>
      {children}
    </GlobalContext.Provider>
  );
}
