import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Arquitetos from './components/Arquitetos';
import Contato from './components/Contato';
import './styles/Effects.css';



function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Sobre />
      <Projetos />
      <Arquitetos />
      <Contato />
    </>
  );
}

export default App;
