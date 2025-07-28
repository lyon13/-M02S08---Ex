import React from "react";
import './NavBar.css';

function NavBar(){
    return(
       <nav className="navbar">
      <a href="#sobre-nos">Sobre Nós</a>
      <a href="#porque-investir">Por que investir?</a>
      <a href="#produtos">Produtos</a>
      <a href="#orcamento">Orçamento</a>
    </nav>
    );
};

export default NavBar;