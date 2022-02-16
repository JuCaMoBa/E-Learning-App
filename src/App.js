import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/home";
import Modalsignin from "./components/modalsignin";
import Modalsignup from "./components/modalsignup";
import Mathslevel from "./pages/mathslevel";
import Userprofile from "./pages/userprofile";
import { PrivateRoute } from "./restrictedroutes/privateroute";

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
        <Route path="/modalsignin" element={<Modalsignin />} />
        <Route path="/modalsignup" element={<Modalsignup />} />
      </Routes>
    </>
  );
}

export default App;
