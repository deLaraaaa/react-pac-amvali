import React from "react";
import { Link } from "react-router-dom";
import BookSvg from "./assets/BookSvg";
import TreeSvg from "./assets/TreeSvg";
import MountainSvg from "./assets/MountainSvg";
import RecycleSvg from "./assets/RecycleSvg";
import RiverSvg from "./assets/RiverSvg";
import TapSvg from "./assets/TapSvg";
import TerritorySvg from "./assets/TerritorySvg";
import AmvaliSvg from "./assets/AmvaliSvg";

function Card({ selectedValue, planName, planDescription="" }) {
  const SVG_MAP = {
    amvali: AmvaliSvg,
    infra: TerritorySvg,
    ambient: TreeSvg,
    hidro: TapSvg,
    river: RiverSvg,
    education: BookSvg,
    // Add other mappings if needed
  };

  const SvgComponent = SVG_MAP[selectedValue] || AmvaliSvg;

  const truncatedDescription = planDescription && planDescription.length > 80
    ? planDescription.substring(0, 80) + "..."
    : planDescription;

  return (
    <div className="card">
      <Link to="">
        {SvgComponent && <SvgComponent />}
        <div className="text">
          <div className="card-title">
            <h2>{(planName || "NOME DO PLANO").toUpperCase()}</h2>
          </div>
          <div className="card-text">
            <p>
              {(
                truncatedDescription ||
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              ).toLowerCase()}
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
