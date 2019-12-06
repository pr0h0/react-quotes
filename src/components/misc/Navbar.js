import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar">
        <div className="logo">LOGO</div>
        <ul>
          <li>
            <NavLink exact activeStyle={activeStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/quotes">
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const activeStyle = { color: "#000", backgroundColor: "#fff" };
