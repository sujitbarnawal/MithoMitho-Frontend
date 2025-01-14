import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Mobile from "./pages/Mobile";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showResetPassword,setShowResetPassword]=useState(false)

  return (
    <>
      {showLogin && !showResetPassword ? <Login setShowLogin={setShowLogin} setShowResetPassword={setShowResetPassword} /> : <></>}
      {showResetPassword?<ResetPassword setShowLogin={setShowLogin} setShowReserPassword={setShowResetPassword} />:<></>}
      <Router>
        <div className="w-[80%] m-auto ">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/mobile-app" element={<Mobile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/order" element={<PlaceOrder />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
