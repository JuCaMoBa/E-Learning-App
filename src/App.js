import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/home";
import Modalsignin from "./components/modalsignin";
import Modalsignup from "./components/modalsignup";
import Userprofile from "./pages/userprofile";
import Maths from "./pages/maths";
import Modaleditprofile from "./components/modaleditprofile";
import { PrivateRoute } from "./restrictedroutes/privateroute";
import Choosecategory from "./pages/choosecategory";
import Apitrivia from "./components/Apitrivia";

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
          path="/trivia/"
          element={
            <PrivateRoute>
              <Apitrivia />
            </PrivateRoute>
          }
        />
        <Route
          path="/maths"
          element={
            <PrivateRoute>
              <Maths />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
