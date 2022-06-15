import React from "react";
import bg from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import Nav from './Nav';
import NavLink from './NavLink';

function Layout({ children }) {
  return (
    <div className="layout">
      <img
        style={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: "-1",
        }}
        src={bg}
        alt=""
      />
      <div className="divBg"></div>

      <header className="header">
        <img src={logo} alt=""/>
        <Nav>
        
        <NavLink to="" text="About"/>
        <NavLink to="" text="Products"/>
        <NavLink to="" text="Contact"/>

        </Nav>
      </header>
      
      {children}
    </div>
  );
}

export default Layout;
