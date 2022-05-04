import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./components/SignIn";
import HomeWrapper from "./components/HomeWrapper";
import ForgotPassword from "./components/ForgotPassword";
import PreferenceChange from "./components/PreferenceChange";
import ResultsDemo from "./components/ResultsDemo";
import LocationDetails from "./components/LocationDetails";
import LeaveReviewContainer from "./components/LeaveReviewContainer";

import ReadReviewContainer from "./components/ReadReviewContainer";
import AddLocation from "./components/AddLocation";
import { Navbar } from "react-bootstrap";
import CreateOwnerWrapper from "./components/CreateOwnerWrapper";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import BookmarkedResortsDashboard from "./components/BookmarkedResortsDashboard";
import RecommendedResortsDashboard from "./components/RecommendedResortsDashboard";
import EditLocsDash from "./components/EditLocationsDashboard";
import LogOut from "./components/LogOut";
function App() {
  return (
    <Router>
      <div>
        <nav>
          
            {
              <>
                <Navbar bg="primary" variant="dark" style = {{marginBottom: 10}} >
                  <Container>
                    <Navbar.Brand as={Link} to="/home">Ski Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">View Map</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="/SignUp">Sign Up</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/">Sign In</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/preferenceChange">Change Preferences</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/logout">Log Out</NavDropdown.Item>
                          <NavDropdown.Divider />
                        </NavDropdown>
                        <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="/recommendeddashboard">Bookmarks</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/bookmarkdashboard">Recommended</NavDropdown.Item>
                          <NavDropdown.Divider />
                        </NavDropdown>
                        <NavDropdown title="Owner" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="../createownercontain">Become an Owner</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/editlocationsdashboard">Manage Locations</NavDropdown.Item>
                          <NavDropdown.Divider />
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </>

            }
            {
              //<li>
              //<Link to="/">Sign In</Link>
              // </li>
            }
         
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
            path="/bookmarkdashboard"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <RecommendedResortsDashboard></RecommendedResortsDashboard>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/editlocationsdashboard"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <EditLocsDash></EditLocsDash>
                  </div>
                </Container>
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/recommendeddashboard"
            element={
              <AuthProvider>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <BookmarkedResortsDashboard></BookmarkedResortsDashboard>
                  </div>
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
            path="/logout"
            element={
              <AuthProvider>
               <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <LogOut></LogOut>
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
            path="/recommendeddashboard/details"
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
            path="/createownercontain"
            element={
              <AuthProvider>
<Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                <div  style={{  }}>
                  <CreateOwnerWrapper></CreateOwnerWrapper>
                </div>
                </Container>
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
