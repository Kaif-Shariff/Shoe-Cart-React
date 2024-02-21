import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-auto bg-green-500 text-4xl justify-end">
      <ul className="flex p-3 font-semibold text-white">
        <li className="mx-2">
          <Link to="/" aria-label="Home Page">
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/cart" aria-label="Cart Page">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
