import "../styles/Navbar.css";
import menuImg from "../assets/menu-icon.svg";
import startImg from "../assets/star-img.svg";
import { useState } from "react";

export default function Navbar() {
  function toggleMenu() {
    setMenuOpen((prevVal) => {
      return !prevVal;
    });
  }
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar-heading-container">
        <div className="navbar-heading">
          <img className="navbar-title-img" src={startImg} alt="Star logo" />
          <h1 className="nav-title">
            <span className="normal-title">Joseph's</span>{" "}
            <span className="bold-title">Portfolio</span>
          </h1>
        </div>
        <nav className="navbar-links desktop-nav">
          <a className="nav-link" href="#home">
            Home
          </a>
          <a className="nav-link" href="#about">
            About me
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link last-nav-link" href="#contact">
            Get In Touch
          </a>
        </nav>
        <button
          aria-label="menu"
          className="menu-btn mobile-nav"
          onClick={toggleMenu}
        >
          <img src={menuImg} alt="Menu button icon" className="menu-btn-icon" />
        </button>
      </div>
      <nav
        className={`mobile-nav open-menu-container ${
          menuOpen ? "" : "hide-menu"
        }`}
      >
        <div className="open-menu">
          <a
            className="open-menu-link"
            href="#home"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            className="open-menu-link"
            href="#about"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            About me
          </a>
          <a
            className="open-menu-link"
            href="#skills"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Skills
          </a>
          <a
            className="open-menu-link"
            href="#projects"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Projects
          </a>
          <a
            className="open-menu-link"
            href="#contact"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Get In Touch
          </a>
        </div>
      </nav>
    </header>
  );
}
