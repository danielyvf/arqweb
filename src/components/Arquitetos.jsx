import React from "react";
import "../styles/Arquitetos.css";
import '../styles/Effects.css'; 

const Arquitetos = () => {
  return (
    <section id="arquitetos" className="arquitetos">
      <h2>nosso time de arquitetas</h2>

      <div className="arquitetos-grid">

        <div className="arquiteto-card">
          <img src="/imagens/arquiteto1.jpg" alt="Arquiteto 1" />
          <h3>Maria Silva</h3>
          <p>Especialista em design de interiores e sustentabilidade.</p>
        </div>

        <div className="arquiteto-card">
          <img src="/imagens/arquiteto2.jpg" alt="Arquiteto 2" />
          <h3>Beatriz Santos</h3>
          <p>Foco em projetos modernos e minimalistas.</p>
        </div>

        <div className="arquiteto-card">
          <img src="/imagens/arquiteto3.jpg" alt="Arquiteto 3" />
          <h3>Ana Costa</h3>
          <p>Experiência em espaços comerciais e corporativos.</p>
        </div>

      </div>
    </section>
  );
};

export default Arquitetos;
