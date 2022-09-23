const Item = ({ redirectTo, icon, customClass = 'home__social-icon' }) => {
  return (
    <a
      href={redirectTo}
      className={customClass}
    >
      <i className={icon}></i>
    </a>
  );
};

export default Item;
