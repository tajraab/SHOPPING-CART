import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import Loyaout from "./pages/Loyaout";
import ContextFunction from "./pages/Kontext";

function App() {
  console.log("asdasd");
  return (
    <ContextFunction>
      <BrowserRouter>
        <Loyaout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Loyaout>
      </BrowserRouter>
    </ContextFunction>
  );
}
export default App;
