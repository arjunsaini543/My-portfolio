import "../Css/Modal.css";

const Modal = ({ setIsOpen }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <div className="top-div">
          <div className="text-div">
            <h2 className="modal-h2 ">
              <span>🚀</span>About Me
            </h2>

            <p className="modal-text">
              👋 Hey there! I’m
              <strong className="highlight">Arjun Saini</strong> — a passionate,
              creative, and detail-oriented
              <span className="highlight"> Frontend Web Developer</span>. I
              bring ideas to life through sleek, performant, and responsive
              digital experiences.
            </p>

            <p className="modal-text">
              🛠️ I build using <strong className="highlight">HTML</strong>,
              <strong className="highlight">CSS</strong>,
              <strong className="highlight">JavaScript</strong>, and modern
              frameworks like <strong className="highlight">React.js</strong>.
              My focus is on clean code, pixel-perfect designs, and intuitive
              UI/UX that users love.
            </p>

            <p className="modal-text">
              🌟 Let’s collaborate and build something
              <strong className="highlight">amazing</strong> together. Your
              vision + my code = magic.
            </p>
          </div>
          <div className="image-cont">
            <img className="code-img" src="./hero/coder.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
