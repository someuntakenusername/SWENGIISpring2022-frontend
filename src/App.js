import React from 'react';
import  {MapComponent}  from './components/MapComponent';
import './App.css';
import useWindowDimensions from "./FunctionReferences/WindowDimensions"

function App() {

  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
       <MapComponent
       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE&v=3.exp&libraries=geometry,drawing,places"
       loadingElement={<div style={{ height: `100%` }} />}
       containerElement={<div style={{ height: height }} />}
       mapElement={<div style={{ height: width }} />}
       ></MapComponent>
    </div>
  );
}
export default App;
