import { useState } from 'react';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar/NavBar";
import SobreNos from "./components/SobreNos/SobreNos";

function App() {
  

  return (
    
      <div>
      <Navbar />

      <SobreNos />

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
