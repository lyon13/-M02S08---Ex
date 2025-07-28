import { useState } from 'react';
import './App.css';
import React from "react";
import Navbar from "./components/NavBar";

function App() {
  

  return (
    
      <div>
      <Navbar />
      <section id="sobre-nos">
        <h2>Sobre Nós</h2>
        {/* conteúdo */}
      </section>

      <section id="porque-investir">
        <h2>Por que investir?</h2>
        {/* conteúdo */}
      </section>

      <section id="produtos">
        <h2>Produtos</h2>
        {/* conteúdo */}
      </section>

      <section id="orcamento">
        <h2>Orçamento</h2>
        {/* conteúdo */}
      </section>
    </div>
    
  );
};

export default App;
