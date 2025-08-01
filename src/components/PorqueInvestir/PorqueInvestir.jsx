import React from 'react';

import './PorqueInvestir.css';
import { FcGlobe } from "react-icons/fc";

 function PorQueInvestir() {
return (
    <section id="porque-investir" className="investir-section">
      <h2>Por que investir em Energia Solar?</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <FcGlobe size={40} />
          <h3>Economia na conta de luz</h3>
          <p>Reduza os custos mensais com energia elétrica.</p>
        </div>
        <div className="benefit-card">
          <FcGlobe size={40} />
          <h3>Fonte de energia renovável</h3>
          <p>Energia limpa, sustentável e abundante.</p>
        </div>
        <div className="benefit-card">
          <FcGlobe size={40} />
          <h3>Valorização do imóvel</h3>
          <p>Seu imóvel se torna mais atrativo no mercado.</p>
        </div>
        <div className="benefit-card">
          <FcGlobe size={40} />
          <h3>Redução do impacto ambiental</h3>
          <p>Ajude a preservar o planeta com menor emissão de CO₂.</p>
        </div>
      </div>
    </section>
  );
}

export default PorQueInvestir;