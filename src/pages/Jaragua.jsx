import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import FooterBlack from "../components/FooterBlack";
import HeaderBlack from "../components/HeaderBlack";

export function Jaragua() {
  return (
    <div className="main-page-city">
      <Helmet>
        <body style="background-color: #F8F8F8;" />
      </Helmet>
      <HeaderBlack />
      <div className="return"><Link to="/"><p>← VOLTAR</p></Link></div>
        <div className="title">
            <h1>ESCOLHA UM PLANO PARA CONTINUAR</h1>
        </div>
      <FooterBlack />
    </div>
  );
}
