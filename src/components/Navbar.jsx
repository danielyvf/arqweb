import React, { useEffect } from 'react';
import '../styles/Navbar.css';
import '../styles/Effects.css'; 

const Navbar = () => {
  useEffect(() => {
    // Função para lidar com o efeito de rolagem
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) { // Se rolar mais de 50px
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#main">HOME</a></li>
        <li><a href="#sobre">SOBRE</a></li>
        <li><a href="#projetos">PROJETOS</a></li>
        <li><a href="#arquitetos">ARQUITETOS</a></li>
        <li><a href="#contato">CONTATO</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
