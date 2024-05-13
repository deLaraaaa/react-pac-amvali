import React from "react";
import { Link } from 'react-router-dom';
import CountyData from '../utils/countyData';

function HeaderBlack(props) {
  const { pageTitle, pageLink, countyShield } = CountyData();
  return (
    <nav className="navbar-black">
      <div className="content-nav">
        <div className="logo-dash">
          <Link to="/">
          <img
            id="black-logo"
            src="/img/Logo AMV Black.png"
            alt="Amvali Black Logo"
            width="80px"
          />
          </Link>
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