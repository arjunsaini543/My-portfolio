import Navbar from "../Components/Navbar";
import "./App.css";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      // once: false,
      // mirror: true,
      once: false, // set to false to animate every time you scroll
      offset: 50, // how far from the element before triggering (in px)
      delay: 1, // delay in ms before animation starts
      easing: "ease", // easing type
      mirror: true, // whether elements animate out while scrolling past
      anchorPlacement: "top-bottom", // where in viewport the animation should trigger
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
