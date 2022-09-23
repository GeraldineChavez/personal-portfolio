import React from 'react'

const PersonalData = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Hola, Soy Geraldine</h1>
      <h3 className="home__subtitle">Desarrolladora JS - ReactJS</h3>
      <p className="home__description">Apasionada por el desarrollo y la creación de hermosas y responsivas interfaces.</p>
      <a href="#contact" className="button button--flex">
        Contactame <i className="uil uil-message button__icon"></i>
      </a>
    </div>
  )
}

export default PersonalData