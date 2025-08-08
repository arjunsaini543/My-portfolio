import { useEffect, useState } from "react";
import "../Css/Footer.css";

const Footer = () => {
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 900);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-1 border-top">
        <p className="footer-text col-md-4 mb-0">
          All rights reserved by Arjun © 2025.
        </p>

        <img src="./Logo/name-logo.svg" className="footer-logo" alt="Logo" />

        <div className="footer-icons col-md-4 justify-content-end d-flex gap-3">
          {/* WhatsApp */}
          <div className="icon-tooltip-wrap">
            <a
              href="https://wa.me/919812742096"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
            <div className="icon-tooltip-label">WhatsApp</div>
          </div>

          {/* Instagram */}
          <div className="icon-tooltip-wrap">
            <a
              href="https://www.instagram.com/itsarjun_10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="icon-tooltip-label">Instagram</div>
          </div>

          {/* GitHub */}
          <div className="icon-tooltip-wrap">
            <a
              href="https://github.com/arjunsaini543"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <div className="icon-tooltip-label">GitHub</div>
          </div>

          {/* LinkedIn */}
          <div className="icon-tooltip-wrap">
            <a
              href="https://www.linkedin.com/in/arjun-saini-36526936a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <div className="icon-tooltip-label">LinkedIn</div>
          </div>
        </div>
      </footer>

      {Visible && (
        <a href="#" className="scroll-top">
          <i className="fas fa-arrow-up text-center"></i>
        </a>
      )}
    </>
  );
};

export default Footer;
