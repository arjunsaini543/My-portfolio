import "../Css/marq.css";
import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <>
      <div className="marq-wrapper">
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
            <img className="marq-img" src="./public/marq/React js.png" alt="" />
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
    </>
  );
};

export default Marq;
