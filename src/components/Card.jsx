import React from "react";
import { Link } from "react-router-dom";
import BookSvg from "./assets/BookSvg";
import TreeSvg from "./assets/TreeSvg";
import MountainSvg from "./assets/MountainSvg";
import RecycleSvg from "./assets/RecycleSvg";
import RiverSvg from "./assets/RiverSvg";
import TapSvg from "./assets/TapSvg";
import TerritorySvg from "./assets/TerritorySvg";

function Card() {
  return (
    <div className="card">
      <Link to="">
        <TapSvg />
        <div className="text">
          <div className="card-title">
            <h2>PLANO DIRETOR</h2>
          </div>
          <div className="card-text">
            <p>
              planejamento urbano para orientar o desenvolvimento e o
              crescimento das cidades de forma ordenada e sustentável.
              aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className="see-more">
          <p>
            Leia mais <b id="arrow">→</b>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
