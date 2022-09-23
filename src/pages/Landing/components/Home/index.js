import "./styles.css";
import HomeSection from './components/HomeSection';
import SocialMedia from './components/SocialMedia';

const Home = () => {
  return(
    <HomeSection>
      <HomeSection.SocialMedia>
        <SocialMedia.Item
          redirectTo="https://www.linkedin.com/in/geraldine-chavez-arroyo-a92943210/"
          icon="uil uil-linkedin-alt"
        />
        <SocialMedia.Item
          redirectTo="https://github.com/GeraldineChavez"
          icon="uil uil-github-alt"
        />
      </HomeSection.SocialMedia>
      <HomeSection.ProfileImage />
      <HomeSection.PersonalData />
    </HomeSection>
  )
}

export default Home;
