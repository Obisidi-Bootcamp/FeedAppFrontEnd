import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="nav">
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default Navbar;
