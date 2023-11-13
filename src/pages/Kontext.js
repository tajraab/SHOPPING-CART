import { createContext, useState } from "react";

const Kontext = createContext();
function ContextFunction({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <Kontext.Provider value={{ data, setData, search, setSearch }}>
      {children}
    </Kontext.Provider>
  );
}
export default ContextFunction;
export { Kontext };