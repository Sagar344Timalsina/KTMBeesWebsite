import React from "react";
import "../index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-9 flex justify-between items-center px-4 bg-white z-20 sticky top-0 sm:h-12">
      <section className="logo">
        <Link to={"/"}>
          <img
            src="../assests/logo/bees.png"
            alt="Bees"
            className="w-28 sm:w-44"
          />
        </Link>
      </section>
      <section className="hamburger__logo">
        <GiHamburgerMenu size={17} />
      </section>
    </nav>
  );
};

export default Navbar;
