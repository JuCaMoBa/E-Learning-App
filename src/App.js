import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/home";
import Modalsignin from "./components/modalsignin";
import Modalsignup from "./components/modalsignup";
import Mathslevel from "./pages/mathslevel";
import Userprofile from "./pages/userprofile";
import Math48 from "./pages/math48";
import Math914 from "./pages/math914";
import Math15 from "./pages/math15";
import Modaleditprofile from "./components/modaleditprofile";
import { PrivateRoute } from "./restrictedroutes/privateroute";
import Choosecategory from "./pages/choosecategory";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/userprofile"
          element={
            <PrivateRoute>
              <Userprofile />
            </PrivateRoute>
          }
        />
        <Route
          path="/mathslevel"
          element={
            <PrivateRoute>
              <Mathslevel />
            </PrivateRoute>
          }
        />
        <Route
          path="/choosecategory"
          element={
            <PrivateRoute>
              <Choosecategory />
            </PrivateRoute>
          }
        />
        <Route path="/modalsignin" element={<Modalsignin />} />
        <Route path="/modalsignup" element={<Modalsignup />} />
        <Route path="/modaleditprofile" element={<Modaleditprofile />} />
        <Route
          path="/math48"
          element={
            <PrivateRoute>
              <Math48 />
            </PrivateRoute>
          }
        />
        <Route
          path="/math914"
          element={
            <PrivateRoute>
              <Math914 />
            </PrivateRoute>
          }
        />
        <Route
          path="/math15"
          element={
            <PrivateRoute>
              <Math15 />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
