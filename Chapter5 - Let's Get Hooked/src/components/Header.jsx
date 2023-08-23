import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../image/logo_satvik.jpg";

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <FaShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Title = () => (
    <a href="/">
      <img className="logo" src={logo} alt="Satvik logo" />
    </a>
  );
  

export default Header;
