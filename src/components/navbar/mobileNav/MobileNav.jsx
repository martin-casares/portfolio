import React from "react";
import "./mobileNav.css";
import { Link } from "react-scroll";

export const MobileNav = ({ isOpen, toggleMenu }) => {
  /* const handleLinkClick = () => {
   *
   *   toggleMenu();
   * }; */
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* <img src="" alt="" className="logo" /> */}
          <strong className="logo">Martin Casares</strong>
          <ul>
            <li>
              <Link
                to="hero"
                className="menu-item"
                smooth={true}
                duration={900}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                className="menu-item"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Estudios
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                className="menu-item"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Experiencia
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                className="menu-item"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Habilidades
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                className="menu-item"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Proyectos
              </Link>
            </li>
            <li className="contact-btn">
              <Link
                to="contact"
                className="menu-item"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
            {/* <button className="contact-btn" onClick={toggleMenu}>
		HireMe
		</button> */}
          </ul>
        </div>
      </div>
    </>
  );
};
