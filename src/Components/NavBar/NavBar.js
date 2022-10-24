import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="list-item-img">
          <NavLink to={`/`}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
              className="nimg"
              alt=""
            />
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to={`/personajes`} className="link">
            Personajes
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to={`/comics`} className="link">
            Comics
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to={`/series`} className="link">
            Series
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
