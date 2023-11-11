import React from "react";
import { NavLink } from "react-router-dom";

function TitleNavigation({ path, pathName, title }) {
  return (
    <div>
      <div className="total-nav-title">
        <div className="navigation">
          <NavLink to={"/"}>Стройоптторг</NavLink>/
          <NavLink to={path}>{pathName}</NavLink>
        </div>
        <div className="total-page-title">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default TitleNavigation;
