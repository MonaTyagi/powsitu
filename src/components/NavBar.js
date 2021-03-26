import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavLink.css";
export default function NavBar() {
  return (
    <div class="topnav">
      <Link to="/" exact>
        Home
      </Link>
      {" - "}
      <Link to="/food1">Food1</Link>
      {" - "}
      <Link to="/search">Search</Link>
    </div>
  );
}
