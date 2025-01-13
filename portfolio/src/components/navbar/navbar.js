import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* <h1 className="navbar-logo">MyPortfolio</h1> */}
      <ul className="navbar-links">
        <li><Link to="/">Incio</Link></li>
        <li><Link to="/about">Sobre Mim</Link></li>
        <li><Link to="/skills">Conhecimentos</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;