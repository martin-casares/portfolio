import { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import { MobileNav } from "./mobileNav/MobileNav";

export const Navbar = ({ scrollToSection }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <strong className="logo">Logo </strong>

          <ul>
            <li>
              <Link
                to="hero"
                className="menu-item"
                smooth={true}
                duration={900}
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
              >
                Estudios
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                className="menu-item"
                smooth={true}
                duration={500}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                className="menu-item"
                smooth={true}
                duration={500}
              >
                Experiencia
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                className="menu-item"
                smooth={true}
                duration={500}
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
              >
                Contacto
              </Link>
            </li>
            {/* <button className="contact-btn" onClick={toggleMenu}>
		HireMe
		</button> */}
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span>
              {openMenu ? <MdClose size={30} /> : <MdMenu size={30} />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
