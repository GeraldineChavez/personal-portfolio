import React from "react";

import ABOUT_IMAGE from "../../../assets/images/GeraldineAbout.jpeg";

const Content = () => {
  return (
    <div className="about__container container grid">
      <img src={ABOUT_IMAGE} alt="About me" className="about__img" />
      <div className="about__data">
        <p className="about__description">
          Desarrolladora de Software con experiencia trabajando en frontend, con
          sólidos conocimientos en JS, ReactJS, ES6, VanillaJS, HTML, CSS, React
          Native.
          <br />
          Me gusta mucho ver peliculas y series 🎬. Viajar, conocer diferentes
          culturas y costumbres.
        </p>

        <div className="about__info">
          <div>
            <span className="about__info-title">1</span>
            <span className="about__info-name">
              {" "}
              Años de
              <br /> Experiencia
            </span>
          </div>
          <div>
            <span className="about__info-title">1</span>
            <span className="about__info-name">
              Compañía
              <br />{" "}
            </span>
          </div>
          <div>
            <span className="about__info-title">6</span>
            <span className="about__info-name">
              Proyectos <br /> Freelance
            </span>
          </div>
        </div>

        {/*
              <div className="about__buttons">
                <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                    Download CV <i className="uil uil-download-alt button__icon"></i>
                </a>
            </div>
              */}
      </div>
    </div>
  );
};

export default Content;

