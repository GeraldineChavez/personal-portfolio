import React from 'react'
import Image from './Image';
import PersonalData from './PersonalData';
import ScrollDownButton from './ScrollDownButton';
import SocialMedia from './SocialMedia'

const HomeSection = ({children}) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {children}
        </div>                  
        <ScrollDownButton />
      </div>
    </section>
  )
}

HomeSection.SocialMedia = SocialMedia;
HomeSection.ProfileImage = Image;
HomeSection.PersonalData = PersonalData;
HomeSection.ScrollDownButton = ScrollDownButton;

export default HomeSection