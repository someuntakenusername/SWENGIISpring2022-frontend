import React, {useState, useEffect} from 'react'
import { MapComponent } from './MapComponent'
import useWindowDimensions from '../FunctionReferences/WindowDimensions'
import { useAuth } from '../contexts/AuthContext';
import { useLocation, Route } from 'react-router-dom'
import ResultsDemo from './ResultsDemo';
import { Button } from 'react-bootstrap';
import MapWrapper from './MapWrapper';

function exportLocations(state, setSelected, selected) {
  let renderArray = [];
  for (let index = 0; index < state.length; index++) {
      
        renderArray = [...renderArray,<li key={state[index].name} style={{paddingTop: 10}}> <Button variant='light' onClick={(e) => {
          setSelected(state[index])
        }}>{state[index].name + ": " + state[index].rank}</Button></li>]
     
  }
  return renderArray;
}


export default function HomeWrapper({route, navigation}) {
  
  const { height, width } = useWindowDimensions();

  const { signin, currentUser, logout } = useAuth();

  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <MapWrapper currentUser={currentUser}></MapWrapper>
    /*
    <div style = {{display: 'flex', flexDirection: 'row'}}>
    <MapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: height, width: width }} />}
      containerElement={<div style={{ height: height, width: width }} />}
      mapElement={<div style={{ height: height, width: width }} />}
      

    >
    </MapComponent>
  
  </div>
  */
  )
}
