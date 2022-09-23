import React from "react";

const Content = () => {
  React.useLayoutEffect(() => {
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active");
        });

        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
          tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
      });
    });
  }, []);

  return (
    <>
      <h2 className="section__title">Logros</h2>
      <div className="section__subtitle">Mi Aventura Personal</div>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educación
          </div>

          <div
            className="qualification__button button--flex"
            data-target="#work"
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Laborales
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingeniería de Sistemas</h3>
                <span className="qualification__subtitle">
                  Universidad Piloto de Colombia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Junio, 2015 - Febrero, 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Curso "React - The complete Guide"
                </h3>
                <span className="qualification__subtitle">
                  Udemy - Profesor Maximillian Schwarzmüller
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Marzo, 2021 - Julio, 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Curso "React Pro"</h3>
                <span className="qualification__subtitle">
                  Udemy - Profesor Fernando Herrera
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Agosto, 2021 - Octubre, 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Curso "Epic React The most comprehensive guide for pros."
                </h3>
                <span className="qualification__subtitle">
                  Kentcdodds - Profesor Kent C. Dodds{" "}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Enero, 2022 - Actualmente
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content" data-content id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollo Web</h3>
                <span className="qualification__subtitle">
                  <a
                    href="http://quiet-meadow-66641.herokuapp.com/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Aplicación web para gestión administrativa
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Enero, 2020 - Diciembre, 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Proyecto Personal</h3>
                <span className="qualification__subtitle">
                  <a
                    href="https://multiple-rooms-chat.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Aplicación web de chat con multiples salas.
                  </a>
                  <small>(JavaScript, Socket.io, CSS)</small>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Por Definir
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollo Movil</h3>
                <span className="qualification__subtitle">
                  Aplicación Movil para restaurantes, gestión de pedidos,
                  clientes, domicilios.
                  <small>
                    (React Native, React Native Base, React Native Paper)
                  </small>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Por Definir
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
