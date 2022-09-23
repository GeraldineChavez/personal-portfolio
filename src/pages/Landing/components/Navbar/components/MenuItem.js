const MenuItem = ({ itemValue, redirectIndex }) => {
  return (
    <li className="nav__item">
      <a href={`#${redirectIndex}`} className="nav__link active-link">
        <i className="uil uil-estate nav__icon"></i> {itemValue}
      </a>
    </li>
  );
};

export default MenuItem;
