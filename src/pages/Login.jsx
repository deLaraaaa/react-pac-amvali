import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLogin from "../components/HeaderLogin";

function Login() {
  return (
    <div className="main-login">
      <Helmet>
        <body style="background-color: #F8C401;" />
      </Helmet>
      <HeaderLogin />
      <div className="card-principal">
        <div id="card" className="card">
          <div className="half1">
            <div className="title">
              <h1>BEM-VINDO DE VOLTA!</h1>
            </div>
            <form className="form" action="POST">
              <label>
                <input className="input" type="email" placeholder="" required />
                <span>E-Mail...</span>
              </label>

              <label>
                <input className="input" type="text" placeholder="" required />
                <span>Nome Completo...</span>
              </label>
              <label className="password-label">
                <input
                  className="input"
                  type="password"
                  placeholder=""
                  required
                  id="password"
                />
                <span>Senha...</span>
                <img
                  src="/img/hide.png"
                  id="togglePassword"
                  style={{ width: "30px", cursor: "pointer" }}
                />
              </label>
            </form>
            <div className="submit">
              <div className="enter-button">
                <button>ENTRAR</button>
              </div>
              <div className="forgot-pass">
                <Link to="">
                  <p>Esqueceu sua senha?</p>
                </Link>
                <p id="account">
                  Não possui uma conta?
                  <Link to="Info"> Leia os requisitos e cadastre-se.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="half2">
            <div className="grey-logo">
              <img
                className="grey-logo"
                src="/img/Logo AMV Grey.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;