import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="top-navbar">
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/about">О компании</NavLink>
              </li>
              <li>
                <NavLink to="/"></NavLink>
              </li>
              <li>
                <NavLink to="/"></NavLink>
              </li>
              <li>
                <NavLink to="/"></NavLink>
              </li>
              <li>
                <NavLink to="/"></NavLink>
              </li>
              <li>
                <NavLink to="/"></NavLink>
              </li>
              <li>
                <NavLink to="/"></NavLink>
              </li>
              <li>
                <NavLink to="/"></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
