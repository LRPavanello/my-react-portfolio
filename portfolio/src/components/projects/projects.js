import React from "react";
import './projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="project">
        <h3>Edge</h3>
        <p>Criado para analisar o comportamento de público e aumentar as vendas da empresa em 20%.</p>
        <ul>
          <li>Aplicação React conectada a uma API REST.</li>
          <li>Usando NodeJS, Redux e Postman para otimizar o processo de análise de dados.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;