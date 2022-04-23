import React, { useState } from 'react';
import UserService from '../services/UserService';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps"
import { Link } from 'react-router-dom';


function exportLocations(state) {
  let renderArray = [];
  for (let index = 0; index < state.length; index++) {
    renderArray = [...renderArray, <Marker key={state[index].id} position={{ lat: state[index].latitude, lng: state[index].longitude }} onClick={() => {
      
    }}>
    </Marker>]
  }
  return renderArray;
}



export const MapComponent = withScriptjs(withGoogleMap((props) =>
<>
  <GoogleMap
    defaultZoom={4}
    defaultCenter= {{lat: props.lng, lng: props.long }}
    options={{fullscreenControl: false,streetViewControl: false, rotateControl: false, mapTypeControl: false, keyboardShortcuts: false, scaleControl: false}}
  >

    {props.markers}
    {props.searchMarkers}
  </GoogleMap>
  </>
))

