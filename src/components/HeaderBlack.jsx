import React from "react";

function HeaderBlack() {
  return (
    <nav className="navbar-black">
      <div className="content-nav">
        <div className="logo-dash">
          <img
            id="white-logo"
            src="/img/Logo AMV Black.png"
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
              src="/img/AvatarBlack.png"
              alt="Login Avatar"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBlack;
