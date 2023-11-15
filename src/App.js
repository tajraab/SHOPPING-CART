import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CartContextProvider from "./store/CartContext";
function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div style={{padding:" 0 20%"}}>
        <CartContextProvider>
          <Routes>
            <Route path="/"element={<HomePage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
        </CartContextProvider>
      </div>
      </BrowserRouter>
    </div>
  )
}
export default App;