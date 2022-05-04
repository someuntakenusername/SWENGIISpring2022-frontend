import React from 'react'
import {  useLocation } from "react-router-dom";
import LocationInformation from './LocationInformation';
import { useAuth } from '../contexts/AuthContext';

var LocationDetails = (props) => {
    
    const location = useLocation()
    console.log(location)
    const {currentUser} = useAuth();
    
    return (
      <>
      <LocationInformation id={location.state ? location.state.id : props.id } currentUser={currentUser}></LocationInformation>
      </>
    )
}

export default LocationDetails;


