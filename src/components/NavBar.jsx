import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const links = [
  {
    path: "/items",
    label: "Shop",
  },
  {
    path: "/contact",
    label: "contact",
  },
];

const NavBar = () => {

  const { allProducts } = useContext(CartContext)

  return (
    <nav
      className="p-4 flex justify-between border-[1px] border-red-300"
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
      <div>
        <Link to="/cart">
        <div>
          <p>Cart {allProducts.length}</p>
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
