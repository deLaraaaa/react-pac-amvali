import React from "react";
import { Link } from "react-router-dom";

function HeaderWhite() {
  return (
    <nav className="navbar">
      <div className="content-nav">
        <div className="logo-dash">
        <a href="https://amvali.org.br/" target="_blank" rel="noopener noreferrer">
          <img
            id="white-logo"
            src="/img/Logo AMV White.png"
            alt="Amvali White Logo"
            width="80px"
          />
          </a>
        </div>
        <div className="identity">
          <h1>
            <a href="https://amvali.org.br/" target="_blank" rel="noopener noreferrer">AMVALI</a>
          </h1>
        </div>
        <div>
          <Link to="login">
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
