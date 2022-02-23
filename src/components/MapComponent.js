import React from 'react';
import UserService from '../services/UserService';
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps"



export const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
))

