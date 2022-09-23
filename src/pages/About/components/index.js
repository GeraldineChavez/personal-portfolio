import React from 'react'
import Content from './Content';
import Subtitle from './Subtitle';
import Title from './Title';

const AboutSection = ({children}) => {
  return (
    <section className="about section" id="about">
      {children}
    </section>
  )
}

AboutSection.Title = Title;
AboutSection.Subtitle = Subtitle;
AboutSection.Content = Content;

export default AboutSection;