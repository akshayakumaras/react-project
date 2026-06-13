import { useState, createContext } from "react";
import ComB from "./ComB";

export const UserContext = createContext<string | null>(null);

function Com() {
  const [name] = useState("Akshay");
  return (
    <div>
      <UserContext.Provider value={name}>
        <h1>Component A</h1>
        <ComB />
      </UserContext.Provider>
    </div>
  );
}

export default Com;