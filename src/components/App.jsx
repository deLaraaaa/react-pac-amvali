import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Corupa } from "../pages/Corupa";
import { Jaragua } from "../pages/Jaragua";
import { Schroeder } from "../pages/Schroeder";
import { Guaramirim } from "../pages/Guaramirim";
import { Massaranduba } from "../pages/Massaranduba";
import { Itaperiu } from "../pages/Itaperiu";
import { BarraVelha } from "../pages/BarraVelha";
import Login from "../pages/Login";
import Info from "../pages/Info";
import Registro from "../pages/Registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corupa" element={<Corupa />} />
        <Route path="/jaragua-do-sul" element={<Jaragua />} />
        <Route path="/schroeder" element={<Schroeder />} />
        <Route path="/guaramirim" element={<Guaramirim />} />
        <Route path="/massaranduba" element={<Massaranduba />} />
        <Route path="/sao-joao-do-itaperiu" element={<Itaperiu />} />
        <Route path="/barra-velha" element={<BarraVelha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/info" element={<Info />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
