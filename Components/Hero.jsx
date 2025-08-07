import "../Css/Hero.css";
import { useState } from "react";
import Modal from "./Modal";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollDown = () => {
    window.scrollBy({ top: 740, behavior: "smooth" });
  };
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <section>
        <div className="container ">
          <div className="row">
            <div className="hero-container col">
              <div className="text" data-aos="fade-right">
                <h6>👋 Hello, it’s me</h6>
                <h1 className="gradient-text">Arjun Saini</h1>
                <p className="gradient-text">Frontend Web Developer</p>
                <button className="hero-button" onClick={() => setIsOpen(true)}>
                  About me <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
              <div className="hero-image">
                <img
                  data-aos="fade-left"
                  src="./about-removebg-edits.PNG"
                  alt="Hero Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button2">
          <button
            className="hero-button2"
            data-aos="zoom-in"
            onClick={scrollDown}
          >
            Scrool Down<i className="fa-solid fa-arrow-down"></i>
          </button>
          <div className="hr"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
