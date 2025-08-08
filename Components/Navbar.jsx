import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = () => {
  const scrollDown = () => {
    window.scrollBy({ top: 910, behavior: "smooth" });
  };
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          <img src="./Logo/name-logo.svg" className="ms-3" alt="" />
        </Link>
        <button className="mobile-only-btn" onClick={scrollDown}>
          Scrool Down<i className="fa-solid fa-arrow-down"></i>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">
                Projects
              </Link>
            </li>
          </ul>
          <Link to="/Contact">
            <button className="modern-button me-4">Hire me</button>
          </Link>
        </div>
        <button
          className="dark-toggle-btn me-3"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <img src="./dark-mode/sun.png" style={{ width: "30px" }} alt="" />
          ) : (
            <img src="./dark-mode/moon.svg" style={{ width: "30px" }} alt="" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
