import SocialMedia from "../../Landing/components/Home/components/SocialMedia";

const Content = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Geraldine</h1>
            <span className="footer__subtitle">
             Desarrolladora de Software
            </span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                Sobre mi
              </a>
            </li>

            <li>
              <a href="#skills" className="footer__link">
                Mis Habilidades
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <SocialMedia.Item
              customClass='footer__social'
              redirectTo="https://www.linkedin.com/in/geraldine-chavez-arroyo-a92943210/"
              icon="uil uil-linkedin-alt"
            />
            <SocialMedia.Item
              customClass='footer__social'
              redirectTo="https://github.com/GeraldineChavez"
              icon="uil uil-github-alt"
            />
          </div>
        </div>
        <p className="footer__copy">
          &#169; Geraldine Chavez Arroyo.
        </p>
      </div>
    </footer>
  );
};

export default Content;
