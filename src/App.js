import React, { useState } from "react";
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
import ResultsDemo from "./components/ResultsDemo";
import Links from "./components/link";
import UserDashboard from "./components/UserDashboard";
import LocationDetails from "./components/LocationDetails";
import LeaveReviewContainer from "./components/LeaveReviewContainer";

import LeaveReview from "./components/LeaveReview";
import ReadReviewContainer from "./components/ReadReviewContainer";
import AddLocation from "./components/AddLocation";
function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {
              <>
                <AuthProvider>
                  <Links to="/SignUp" message="Sign Up"></Links>
                </AuthProvider>
                <AuthProvider>
                  <Links to="/" message="Sign In"></Links>
                </AuthProvider>
                <AuthProvider>
                  <Links to="/dashboard" message="User Dashboard"></Links>
                </AuthProvider>
                <AuthProvider>
                  <Links to="/preferenceChange" message="Change Preferences"></Links>
                </AuthProvider>
                <AuthProvider>
                  <Links to="/home" message="Map"></Links>
                </AuthProvider>
              
              </>

            }
            {
              //<li>
              //<Link to="/">Sign In</Link>
              // </li>
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
            path="/dashboard"
            element={
              <AuthProvider>
                <Container
            
                  style={{ display: 'flex', minHeight: '100vh' }}
                >

                 <UserDashboard></UserDashboard>

                </Container>

              </AuthProvider>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <AuthProvider>
              <HomeWrapper></HomeWrapper>        
                    </AuthProvider>

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
            path="/addlocation"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <AddLocation></AddLocation>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/ResultsDemo"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <ResultsDemo></ResultsDemo>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/"
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
          <Route
            path="/dashboard/details"
            element={
              <AuthProvider>
                
                  <div className="w-100" style={{ width: "100vh" }}>
                    <LocationDetails></LocationDetails>
                  </div>
            
              </AuthProvider>
            }
          ></Route>
         
          <Route
            path="/leaveReview"
            element={
              <AuthProvider>
                
                  <div className="w-100" style={{ width: "100vh" }}>
                    <LeaveReviewContainer></LeaveReviewContainer>
                  </div>
            
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/readReview"
            element={
              <AuthProvider>
                
                  <div className="w-100" style={{ width: "100vh" }}>
                    <ReadReviewContainer></ReadReviewContainer>
                  </div>
            
              </AuthProvider>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
