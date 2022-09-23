import React from 'react'
import AboutSection from './components'
import './styles.css';

const About = () => {
  return (
    <AboutSection>
      <AboutSection.Title titleValue="Un Poco Sobre Mi" />
      <AboutSection.Subtitle subtitleValue="Mi Introducción" />
      <AboutSection.Content />
   </AboutSection>
  )
}

export default About
