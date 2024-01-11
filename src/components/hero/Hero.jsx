import React from "react";
import "./hero.css";

import developer from "../../assets/images/developer4.jpg";
import js from "../../assets/images/js3.png";
import react from "../../assets/images/react.png";
import css from "../../assets/images/css-3.png";
import html from "../../assets/images/html.png";
import curriculum from "../../assets/cv-martin-casares.pdf";

export const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <h2>Hello! I am frontend developer</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A tempora
          libero quia cupiditate dignissimos officia. Commodi ipsum perferendis
          rerum neque.
        </p>
        <a
          href={curriculum}
          target="_blank"
          /* rel="noopener noreferrer"
		download="cv-martin-casares.pdf" */
          className="cv-btn"
        >
          Descargar Cv
        </a>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img alt="" src={react} />
          </div>

          <img alt="developer" src={developer} />
        </div>

        <div>
          <div className="tech-icon">
            <img alt="" src={html} />
          </div>
          <div className="tech-icon">
            <img alt="" src={css} />
          </div>
          <div className="tech-icon">
            <img alt="" src={js} />
          </div>
        </div>
      </div>
    </section>
  );
};
