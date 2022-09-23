import Item from "./Item";

const SocialMedia = ({children}) => {
  return (
    <div className="home__social">
      {children}
    </div>
  );
};

SocialMedia.Item = Item;

export default SocialMedia;
