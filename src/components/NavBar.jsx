import React from "react";
import { Link, Route } from "react-router-dom";

const links = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/contact",
    label: "contact",
  },
];

const NavBar = () => {
  return (
    <nav
      className="p-4 flex justify-between"
      style={{ backgroundColor: "gray", opacity: "50%" }}
    >
      <div>
        <Link to="/">LOGO</Link>
      </div>
      <ul className="flex justify-end gap-3">
        {links.map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;