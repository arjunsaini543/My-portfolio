import "../Css/About.css";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <>
      <h1 className="client-text" data-aos="zoom-in">
        About me
      </h1>
      <div className="container ">
        <div className="row ">
          <div className="aboutsection ">
            <div className="image-div ">
              <img
                className="aboutimage "
                data-aos="fade-right"
                src="./hero/about-removebg-edits.PNG"
                alt=""
              />
            </div>
            <div className="abouttext" data-aos="fade-up-left">
              <h2 className="about-h2 ">Know more about me</h2>
              <h6 className="about-h6">
                <span className="spans">Hi, I’m Arjun </span> a passionate and
                detail-oriented developer <br />
                with a strong focus on building creative, user-friendly, <br />
                and impactful web experiences. I enjoy solving problems <br />
                through code and constantly strive to learn and grow with <br />
                each project I take on.
                <br />
                <br />
                My journey in tech began with curiosity and evolved into <br />
                a deep interest in web development — especially using <br />
                modern tools like React.js and CSS.
                <br />
                <br />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
