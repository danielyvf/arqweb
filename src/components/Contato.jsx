import React from "react";
import "../styles/Contato.css";
import '../styles/Effects.css'; 

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="contato-box">
        <h2>Contato</h2>
        <p>Entre em contato conosco para mais informações ou orçamento.</p>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
