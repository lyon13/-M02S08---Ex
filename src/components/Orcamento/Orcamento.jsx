import React, { useState } from "react";
import "./Orcamento.css";

 function Orcamento() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoSistema: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Orçamento enviado com sucesso!");
    setFormData({ nome: "", email: "", telefone: "", tipoSistema: "" });
  }

  return (
    <section id="orcamento" className="orcamento-container">
      <h2>Solicite um Orçamento</h2>
      <form onSubmit={handleSubmit} className="orcamento-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <select
          name="tipoSistema"
          value={formData.tipoSistema}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o tipo de sistema</option>
          <option value="Residencial">Residencial</option>
          <option value="Comercial">Comercial</option>
          <option value="Industrial">Industrial</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Orcamento;