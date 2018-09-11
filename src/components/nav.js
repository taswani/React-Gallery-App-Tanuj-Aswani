import React from "react"; //Importing react for the app.
import { NavLink } from "react-router-dom"; //Importing Navlink from react-router-dom.

//Stateless component that creates all the buttons and title for the app.
const Nav = props => {
  return (
    <div className="container">
      <h1 className="main-title">Gallery App</h1>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/batman">Batman</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Dogs</NavLink>
          </li>
          <li>
            <NavLink to="/daredevil">Daredevil</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
