import React from "react";
import { Link } from "react-router-dom";
import "../homepagefolder/homepagecss/header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
