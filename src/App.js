import React from "react";
import { MapComponent } from "./components/MapComponent";
import "./App.css";
import useWindowDimensions from "./FunctionReferences/WindowDimensions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import YelpComponent from "./components/YelpDemoComponent";
import GooglePlacesDemo from "./components/GooglePlacesDemoComponent";
import SignUp from "./components/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import SignIn from "./components/SignIn";
import HomeWrapper from "./components/HomeWrapper";
import ForgotPassword from "./components/ForgotPassword";
import PreferenceChange from "./components/PreferenceChange";


function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {
              /*
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
              */
            }
          </ul>
        </nav>
        <Routes>
          <Route
            path="/SignUp"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <SignUp></SignUp>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <HomeWrapper></HomeWrapper>
            }
          ></Route>
          <Route
            path="/ForgotPassword"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <ForgotPassword></ForgotPassword>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
           <Route
            path="/PreferenceChange"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <PreferenceChange></PreferenceChange>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/SignIn"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <SignIn></SignIn>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
