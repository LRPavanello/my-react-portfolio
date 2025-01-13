import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Sobre Mim</Link></li>
        <li><Link to="/skills">Conhecimentos</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;