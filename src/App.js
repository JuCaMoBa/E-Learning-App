import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/home";
import Modalsignin from "./components/modalsignin";
import Modalsignup from "./components/modalsignup";
import Mathslevel from "./pages/mathslevel";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mathslevel" element={<Mathslevel />} />
        <Route path="/modalsignin" element={<Modalsignin />} />
        <Route path="/modalsignup" element={<Modalsignup />} />
      </Routes>
    </>
  );
}

export default App;
