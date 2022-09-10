import logo from '../../assets/img/logo.svg'; //logo é um apelido para o caminho da imagem

import './style.css';

function Header() {
  return ( //em src={logo} é uma expressão react para colocar o apelido para o caminho da imagem
    <header>
      <div class="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" /> 
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </header>
  )
}

export default Header;
