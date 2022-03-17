import React from "react";
import { MapComponent } from "./components/MapComponent";
import "./App.css";
import useWindowDimensions from "./FunctionReferences/WindowDimensions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import YelpComponent from "./components/YelpDemoComponent";
import GooglePlacesDemo from "./components/GooglePlacesDemoComponent";
import SignUp from "./components/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const { height, width } = useWindowDimensions();

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
                  style={{minHeight: "100vh"}}
                >
                  <div className="w-100" style={{maxWidth: "400px"}}>
                    <SignUp></SignUp>
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
