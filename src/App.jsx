import { useState } from 'react';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar/NavBar";
import SobreNos from "./components/SobreNos/SobreNos";
import PorqueInvestir from "./components/PorqueInvestir/PorqueInvestir";
import Produtos from "./components/Produtos/Produtos";
import Orcamento from "./components/Orcamento/Orcamento";
import Footer from "./components/Footer/Footer";
function App() {
  

  return (
    
      <div>
      <Navbar />

      <SobreNos />

      <PorqueInvestir />

      <Produtos />

      <Orcamento />

      <Footer />
    </div>
    
  );
};

export default App;
