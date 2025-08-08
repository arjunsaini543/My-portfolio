import Navbar from "../Components/Navbar";
import "./App.css";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 50,
      delay: 1,
      easing: "ease",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <div className="canvas">
        <div id="wrapper-canvas"></div>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
