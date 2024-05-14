import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import HeaderBlack from "../components/HeaderBlack";
import Tabs from "../components/Tabs";
import CountyData from "../utils/countyData";

function CriarPlano() {
  const { pageReturn } = CountyData();
  return (
    <div className="main-page-plan">
      <Helmet bodyAttributes={{ style: "background-color: #F8F8F8;" }} />
      <HeaderBlack />
      <div className="return">
        <Link to={pageReturn}>
          <p>← VOLTAR</p>
        </Link>
      </div>
      <div className="title">
        <h1>CRIAÇÃO DE PLANOS</h1>
      </div>
      <Tabs />
    </div>
  );
}

export default CriarPlano;
