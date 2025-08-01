
import React from 'react';


import produto1 from '/Users/Pichau/exercicio/src/Imagens/kitsolar.jpg';
import produto2 from '/Users/Pichau/exercicio/src/Imagens/inversorsolar.jpg';
import produto3 from '/Users/Pichau/exercicio/src/Imagens/placasolar.jpg';
import './Produtos.css'; // Arquivo de estilos

const produtos = [
  {
    id: 1,
    nome: 'Painel Solar 400W',
    imagem: produto3,
    descricao: 'Alta eficiência com tecnologia monocristalina.',
  },
  {
    id: 2,
    nome: 'Inversor Solar',
    imagem: produto2,
    descricao: 'Converte energia solar em eletricidade utilizável.',
  },
  {
    id: 3,
    nome: 'kit de energia solar',
    imagem: produto1,
    descricao: 'Garante a vida útil da bateria e segurança do sistema.',
  },
];

 function Produtos() {
  return (
    <section id="produtos" className="produtos-container">
      <h2>Produtos</h2>
      <div className="produtos-grid">
        {produtos.map((item) => (
          <div className="card-produto" key={item.id}>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Produtos;