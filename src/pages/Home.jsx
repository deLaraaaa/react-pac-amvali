import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Footer from "../components/Footer";

export function Home() {
  return (
    <div className="main-page">
      <Header />
      <div className="map">
        <div className="map-title">
          <h1>ESCOLHA UM MUNICÍPIO</h1>
        </div>
        <Map />
      </div>
      <Footer />
    </div>
  );
}
