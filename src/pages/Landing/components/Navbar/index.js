import React from "react";
import NavigationBar from "./components";
import "./styles.css";

const Navbar = () => {
  return (
    <NavigationBar>
      <NavigationBar.Logo />
      <NavigationBar.Menu>
        <NavigationBar.MenuItem itemValue="Principal" redirectIndex='home' />
        <NavigationBar.MenuItem itemValue="Sobre mi" redirectIndex='about'/>
        <NavigationBar.MenuItem itemValue="Habilidades" redirectIndex='skills' />
        <NavigationBar.MenuItem itemValue="Contactame" redirectIndex='contact'/>
      </NavigationBar.Menu>
      <NavigationBar.Buttons />
    </NavigationBar>
  );
};

export default Navbar;
