import Navbar from "../Components/Navbar";
import "./App.css";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();

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

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 0);
  }, [location.pathname]);

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
