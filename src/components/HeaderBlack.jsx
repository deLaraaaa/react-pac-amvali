import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HeaderBlack() {
  const location = useLocation();

  let pageTitle;
  let pageLink;
  let countyShield;
  switch (location.pathname) {
    case "/Corupa":
      pageTitle = "CORUPÁ";
      pageLink = "https://servicos.corupa.sc.gov.br/";
      countyShield = "https://upload.wikimedia.org/wikipedia/commons/6/60/Bras%C3%A3o_do_munic%C3%ADpio_de_Corup%C3%A1_%28SC%29.png";
      break;
    case "/Jaragua":
      pageTitle = "JARAGUÁ DO SUL";
      pageLink = "https://www.jaraguadosul.sc.gov.br/";
      countyShield = "https://upload.wikimedia.org/wikipedia/commons/0/04/Brasao_JaraguadoSul_SantaCatarina_Brasil.svg";
      break;
    case "/Schroeder":
      pageTitle = "SCHROEDER";
      pageLink = "https://schroeder.sc.gov.br/";
      countyShield = "/img/800px-Schroeder-removebg-preview.png"
      break;
    case "/Guaramirim":
      pageTitle = "GUARAMIRIM";
      pageLink = "https://guaramirim.atende.net/cidadao";
      countyShield = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Bras%C3%A3o_do_munic%C3%ADpio_de_Guaramirim_%28SC%29.svg/989px-Bras%C3%A3o_do_munic%C3%ADpio_de_Guaramirim_%28SC%29.svg.png"
      break;
    case "/Massaranduba":
      pageTitle = "MASSARANDUBA";
      pageLink = "https://massaranduba.atende.net/";
      countyShield = "https://upload.wikimedia.org/wikipedia/commons/2/22/Bras%C3%A3o_do_munic%C3%ADpio_de_Massaranduba_%28SC%29.png";
      break;
    case "/Itaperiu":
      pageTitle = "SÃO JOÃO DO ITAPERIÚ";
      pageLink = "https://servicos.pmsji.sc.gov.br/";
      countyShield = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bras%C3%A3o_do_munic%C3%ADpio_de_S%C3%A3o_Jo%C3%A3o_do_Itaperi%C3%BA_%28SC%29.svg/1200px-Bras%C3%A3o_do_munic%C3%ADpio_de_S%C3%A3o_Jo%C3%A3o_do_Itaperi%C3%BA_%28SC%29.svg.png";
      break;
    case "/BarraVelha":
      pageTitle = "BARRA VELHA";
      pageLink = "https://barravelha.atende.net/cidadao";
      countyShield = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bras%C3%A3o_do_munic%C3%ADpio_de_Barra_Velha_%28SC%29.svg/1200px-Bras%C3%A3o_do_munic%C3%ADpio_de_Barra_Velha_%28SC%29.svg.png";
      break;
    default:
      pageTitle = "AMVALI";
      pageLink = "https://amvali.org.br/";
  }

  return (
    <nav className="navbar-black">
      <div className="content-nav">
        <div className="logo-dash">
          <a href="https://amvali.org.br/" target="_blank" rel="noopener noreferrer">
          <img
            id="black-logo"
            src="/img/Logo AMV Black.png"
            alt="Amvali Black Logo"
            width="80px"
          />
          </a>
        </div>
        <div className="identity">
          <h1>
            <a href={pageLink} target="_blank" rel="noopener noreferrer">{pageTitle}</a>
          </h1>
          <a href="{pageLink}"><img src={countyShield} alt="Shield's County" width="35px"/></a>
        </div>
        <div>
          <Link to="../login">
            <img id="login" src="/img/AvatarBlack.png" alt="Login Avatar" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBlack;