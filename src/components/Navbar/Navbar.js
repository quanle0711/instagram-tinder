import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="flex justify-between items-center h-16 bg-gradient-to-r from-yellow-400 text-xl via-red-500 to-pink-500 text-white relative shadow-md font-sans"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          ONION TINDER
        </Link>
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/">
            Home
          </Link>
          <Link className="p-4" to="/menu">
            Menu
          </Link>
          <Link className="p-4" to="/about">
            About
          </Link>
          <Link className="p-4" to="/Contact">
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
