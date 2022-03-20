import React from 'react'
import { MapComponent } from './MapComponent'
import useWindowDimensions from '../FunctionReferences/WindowDimensions'
import { useAuth } from '../contexts/AuthContext';
export default function HomeWrapper() {
    const { height, width } = useWindowDimensions();
  return (
    <>
    
    <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
  
    </div>
    <MapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: height }} />}
      containerElement={<div style={{ height: height }} />}
      mapElement={<div style={{ height: height }} />}
    ></MapComponent>
  </>
  )
}
