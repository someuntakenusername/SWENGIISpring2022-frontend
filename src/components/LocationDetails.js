import React, { Component } from 'react'
import { byID } from '../services/YelpService'
import { Link, useLocation } from "react-router-dom";
import LocationInformation from './LocationInformation';

var LocationDetails;
export default  LocationDetails = (props) => {
    
    const location = useLocation()
    
    return (
      <LocationInformation id={location.state ? location.state.id : props.id } currentUser={location.state ? location.state.currentUser : props.currentUser}></LocationInformation>
    )
}


