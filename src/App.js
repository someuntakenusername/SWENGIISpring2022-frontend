import React from 'react';
import  {MapComponent}  from './components/MapComponent';
import './App.css';
import useWindowDimensions from "./FunctionReferences/WindowDimensions"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import YelpComponent from './components/YelpDemoComponent';
import GooglePlacesDemo from './components/GooglePlacesDemoComponent';
import UserLookup from './components/UserLookupComponenet';

function App() {

  const { height, width } = useWindowDimensions();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Google Maps API</Link>
            </li>
            <li>
              <Link to="/d6">End-To-End</Link>
            </li>
            <li>
              <Link to="/yelp">Yelp API</Link>
            </li>
            <li>
              <Link to="/places">Google Places API</Link>
            </li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element ={
            <div className="App">
              <MapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: height }} />}
              mapElement={<div style={{ height: width }} />}
              >
              </MapComponent>
            </div>
          }>
          </Route>
          <Route path="/yelp" element ={
            <YelpComponent></YelpComponent>
          }>
          </Route>
          <Route path="/places" element ={
            <GooglePlacesDemo></GooglePlacesDemo>
          }>
          </Route>
          <Route path="/d6" element ={
            <UserLookup></UserLookup>
          }></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
