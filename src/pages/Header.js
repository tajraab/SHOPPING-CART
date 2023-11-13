import React, { useContext } from "react";
import { Kontext } from "./Kontext";
export default function Header() {
  const { search } = useContext(Kontext);
  const { setSearch, data, setData } = useContext(Kontext);
  return ( <div
    style={{
      width: "100vw",
      backgroundColor: "red",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <input
      onChange={(e) => setSearch(e.target.value)}
      placeholder="search"
    ></input>
  </div>
);
}