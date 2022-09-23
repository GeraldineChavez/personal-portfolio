import React from "react";
import "./styles.css";
/*==================== ACCORDION SKILLS ====================*/


function toggleSkills() {
  const skillsContent = document.getElementsByClassName("skills__content");

  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

const Skills = () => {
  
  React.useLayoutEffect(() => {
    const skillsHeader = document.querySelectorAll(".skills__header");
    skillsHeader.forEach((el) => {
      console.log('el =>', el);
      el.addEventListener("click", toggleSkills);
    });
  },[])
  
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades Tecnicas</h2>
      <span className="section__subtitle">Mis Tecnologias</span>

      <div className="skills__container container grid">
        <div>
          <div className="skills__content skills__open">
            <div className="skills__header">
              <i className="uil uil-brackets-curly skills__icon"></i>

              <div>
                <h1 className="skills__title">Desarrollo Backend</h1>
                {/* <span className="skills__subtitle">More than 2 years</span> */}
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Laravel</h3>
                  <div className="skills__number">70%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__laravel"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">PHP</h3>
                  <div className="skills__number">100%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__php"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Diseño API REST</h3>
                  <div className="skills__number">60%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__django"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills__content skills__close">
            <div className="skills__header">
              <i className="uil uil-brackets-curly skills__icon"></i>

              <div>
                <h1 className="skills__title">Desarrollo Frontend</h1>
                {/* <span className="skills__subtitle">More than 1 year</span> */}
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React.js</h3>
                  <div className="skills__number">80%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__react"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Javascript</h3>
                  <div className="skills__number">80%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__javascript"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Styled Components</h3>
                  <div className="skills__number">50%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__material"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React Hook Form</h3>
                  <div className="skills__number">60%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__formik"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Atomic Design</h3>
                  <div className="skills__number">90%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__formik"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS - SASS (Librerias Tackyons, Tailwind, Boostrap)</h3>
                  <div className="skills__number">90%</div>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__formik"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="skills__content skills__close">
              <div className="skills__header">
                <i className="uil uil-brackets-curly skills__icon"></i>

                <div>
                  <h1 className="skills__title">Bases de Datos</h1>
                  {/* <span className="skills__subtitle">More than 2 years</span> */}
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MySQL</h3>
                    <div className="skills__number">80%</div>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__mysql"></div>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Informix</h3>
                    <div className="skills__number">80%</div>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__graphql"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

