import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CartContextProvider from "./store/CartContext";
//import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
// import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <div style={{ padding: "0 20%", minHeight: "66.5vh" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          {/* <Toaster /> */}
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
