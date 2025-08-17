import Marquee from "react-fast-marquee";
import "../Css/Skills.css";
import CountUp from "react-countup";

const Skills = () => {
  return (
    <>
      <div className="Skills-container">
        <div className="about-text-container">
          <h1 className="client-text" data-aos="zoom-in">
            Skills
          </h1>
          <h6 className="abouth6" data-aos="flip-down">
            <span className="spans ">Hi, I’m Arjun </span> a passionate and
            detail-oriented frontend developer witha strong focus on creating
            <br /> modern, responsive, and user-friendly webinterfaces. Over
            time, I’ve developed a solid skill <br /> set in technologies like
            HTML, CSS, JavaScript, React.js.
          </h6>
        </div>

        <div className="marq-wrapper" data-aos="zoom-in-up">
          <Marquee speed={50}>
            <div className="img-div">
              <img className="marq-img" src="./public/marq/html.png" alt="" />
            </div>
            <div className="img-div">
              <img className="marq-img" src="./public/marq/Css.png" alt="" />
            </div>
            <div className="img-div">
              <img
                className="marq-img"
                src="./public/marq/java script.png"
                alt=""
              />
            </div>
            <div className="img-div">
              <img
                className="marq-img"
                src="./public/marq/Bootstrap.png"
                alt=""
              />
            </div>
            <div className="img-div">
              <img
                className="marq-img"
                src="./public/marq/React js.png"
                alt=""
              />
            </div>
            <div className="img-div">
              <img className="marq-img" src="./public/marq/Github.png" alt="" />
            </div>
            <div className="img-div">
              <img
                className="marq-img"
                src="./public/marq/Wordpress.png"
                alt=""
              />
            </div>
          </Marquee>
        </div>

        <div className="aboutdivs">
          <div className="div1" data-aos="zoom-in-left">
            <h1>
              <CountUp start={0} end={98} duration={2.75}></CountUp>%
            </h1>
            <h3>HTML5</h3>
          </div>
          <div className="div2" data-aos="zoom-in-left">
            <h1>
              <CountUp start={0} end={92} duration={2.75}></CountUp>%
            </h1>
            <h3>Css</h3>
          </div>
          <div className="div3" data-aos="zoom-in-right">
            <h1 className="text-warning">
              <CountUp start={0} end={88} duration={2.75}></CountUp>%
            </h1>
            <h3 className="text-warning">Java Script</h3>
          </div>

          <div className="div4" data-aos="zoom-in-left">
            <h1>
              <CountUp start={0} end={86} duration={2.75}></CountUp>%
            </h1>
            <h3>React Js</h3>
          </div>
          <div className="div5" data-aos="zoom-in-right">
            <h1>
              <CountUp start={0} end={85} duration={2.75}></CountUp>%
            </h1>
            <h3>WordPress</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
