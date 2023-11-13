import React from "react";
import Header from "./Header";

function Loyaout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <div className="footer">FOOTER</div>
    </div>
  );
}

export default Loyaout;
