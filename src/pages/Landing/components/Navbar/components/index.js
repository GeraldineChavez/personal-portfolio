import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Buttons from "./Buttons";
import "../styles.css";

const NavigationBar = ({ children }) => {
  return (
    <header className="header" id="header">
      <nav className="nav container">{children}</nav>
    </header>
  );
};

NavigationBar.Logo = Logo;
NavigationBar.Menu = Menu;
NavigationBar.MenuItem = MenuItem;
NavigationBar.Buttons = Buttons;

export default NavigationBar;

