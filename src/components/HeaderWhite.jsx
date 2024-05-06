import React from "react";
import { Link } from "react-router-dom";

function HeaderWhite() {
  return (
    <nav className="navbar">
      <div className="content-nav">
        <div className="logo-dash">
          <img
            id="white-logo"
            src="/img/Logo AMV White.png"
            alt="Amvali White Logo"
          />
          <h2 id="dash">Dashboard</h2>
        </div>
        <div className="identity">
          <h1>
            <a href="amvali.org.br">AMVALI</a>
          </h1>
        </div>
        <div>
          <Link to="Login">
            <img
              id="login"
              src="/img/AvatarWhite.png"
              alt="Login Avatar"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HeaderWhite;
