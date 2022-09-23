const Menu = ({children}) => {
  return (
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list grid">
        {children}
      </ul>
      <i className="uil uil-times nav__close" id="nav-close"></i>
    </div>
  );
};

export default Menu;
