import React, { useState } from 'react';
import UserService from '../services/UserService';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps"



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
  <GoogleMap
    defaultZoom={8}
    defaultCenter= {{lat: props.lng, lng: props.long }}
    options={{fullscreenControl: false,streetViewControl: false, rotateControl: false, mapTypeControl: false, keyboardShortcuts: false, scaleControl: false}}
  >

    <Marker
    
      position={ props.selectedPin ? {lat: props.selectedPin.latitude, lng: props.selectedPin.longitude} : null}
    >

    </Marker>
    
  </GoogleMap>
))

