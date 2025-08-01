import { useState } from 'react';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar/NavBar";
import SobreNos from "./components/SobreNos/SobreNos";
import PorqueInvestir from "./components/PorqueInvestir/PorqueInvestir";
import Produtos from "./components/Produtos/Produtos";
import Orcamento from "./components/Orcamento/Orcamento";
function App() {
  

  return (
    
      <div>
      <Navbar />

      <SobreNos />

      <PorqueInvestir />

      <Produtos />

      <Orcamento />
    </div>
    
  );
};

export default App;
