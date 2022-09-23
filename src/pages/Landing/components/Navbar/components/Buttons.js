const Buttons = () => {
  //This function should not be added here, this should be reafactorized into a better way
  const changeTheme = () => {
    const themeButton = document.getElementById('theme-button')
    const iconTheme = 'uil-sun';
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle(iconTheme)

  };
  return (
    <div className="nav__btns">
      {/* For accesibility the only html elements that should have events are BUTTONS, FIX THIS */}
      <i className="uil uil-moon change-theme" id="theme-button" onClick={() => changeTheme()}></i>
      <div className="nav__toggle" id="nav-toggle">
        <i className="uil uil-apps"></i>
      </div>
    </div>
  );
};

export default Buttons;
