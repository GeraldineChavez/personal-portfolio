import React from 'react'

const ScrollDownButton = () => {
  return (
    <div className="home_scroll">
      <a href="#about" className="home__scroll-button button--flex">
          <i className="uil uil-mouse-alt home__scroll-mouse"></i>
          <span className="home__scroll-name">Scroll down</span>
          <i className="uil uil-arrow-down homw__scroll-arrow"></i>
      </a>
    </div>
  )
}

export default ScrollDownButton