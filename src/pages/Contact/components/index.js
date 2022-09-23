const ContactSection = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contactame</h2>
      <span className="section__subtitle">¡Ponte en Contacto!</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>

            <div>
              <h3 className="contact__title">Llamame</h3>
              <span className="contact__subtitle">+57 1231232312</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Correo Electronico</h3>
              <span className="contact__subtitle">geralchavezao@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 className="contact__title">Ubicación</h3>
              <span className="contact__subtitle">
                Colombia
              </span>
            </div>
          </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label for="name" className="contact__label">
                  Nombre
                </label>
                <input type="text" id="name" className="contact__input" />
              </div>

              <div className="contact__content">
                <label for="email" className="contact__label">
                  Correo Electronico
                </label>
                <input type="email" id="email" className="contact__input" />
              </div>
            </div>

            <div className="contact__content">
              <label for="message-contact" className="contact__label">
                Mensaje
              </label>
              <textarea
                name=""
                cols="0"
                rows="7"
                id="message-contact"
                className="contact__input"
              ></textarea>
            </div>

            <div>
              <a href="#asd" className="button button--flex">
                Enviar Mensaje
                <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
