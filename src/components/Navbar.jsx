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
    <div className="navbar">
      <div className="navbar-heading-container">
        <div className="navbar-heading">
          <img className="navbar-title-img" src={startImg} alt="Star logo" />
          <h1 className="nav-title">
            <span className="normal-title">Joseph's</span>{" "}
            <span className="bold-title">Portfolio</span>
          </h1>
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          <img src={menuImg} alt="Menu button icon" className="menu-btn-icon" />
        </button>
      </div>
      <div className={`open-menu-container ${menuOpen ? "" : "hide-menu"}`}>
        <div className="open-menu">
          <a className="open-menu-link" href="">
            Home
          </a>
          <a className="open-menu-link" href="">
            About me
          </a>
          <a className="open-menu-link" href="">
            Skills
          </a>
          <a className="open-menu-link" href="">
            Projects
          </a>
          <a className="open-menu-link" href="">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
