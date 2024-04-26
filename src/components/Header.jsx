import React from "react";

function Header() {
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
          <a href="./login.html">
            <img
              id="avatar"
              src="/img/Avatar.png"
              alt="Login Avatar"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
