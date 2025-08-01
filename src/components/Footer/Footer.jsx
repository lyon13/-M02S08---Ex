import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

 function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p><strong>Empresa SolarTech</strong></p>
        <p>CNPJ: 00.000.000/0001-00</p>
        <p>Email: contato@solartech.com.br</p>
        <p>Endereço: Rua da Energia, 123 - Solândia, SP</p>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
      </div>
    </footer>
  );
}
export default Footer;