import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="footer-text col-md-4 mb-0">
        All rights reserved by Arjun © 2025.
      </p>

      <img src="./name-logo.svg" className="footer-logo" alt="Logo" />

      <div className="footer-icons col-md-4 justify-content-end">
        <i className="fa-brands fa-instagram  "></i>
        <i className="fa-solid fa-envelope text-info"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-square-facebook"></i>
      </div>
    </footer>
  );
};

export default Footer;
