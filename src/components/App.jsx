import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
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

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Corupa" element={<Corupa />}/>
            <Route path="/Jaragua" element={<Jaragua />}/>
            <Route path="/Schroeder" element={<Schroeder />}/>
            <Route path="/Guaramirim" element={<Guaramirim />}/>
            <Route path="/Massaranduba" element={<Massaranduba />}/>
            <Route path="/Itaperiu" element={<Itaperiu />}/>
            <Route path="/BarraVelha" element={<BarraVelha />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Login/Info" element={<Info />}/>
        </Routes>
    </Router>
  );
}

export default App;
