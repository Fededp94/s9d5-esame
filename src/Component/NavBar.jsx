import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Netflix Clone</h2>
      <ul>
        <li>Home</li>
        <li>Account</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
