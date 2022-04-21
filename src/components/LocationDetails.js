import React, { Component } from 'react'
import { byID } from '../services/YelpService'
import { Link, useLocation } from "react-router-dom";
import LocationInformation from './LocationInformation';

export default function LocationDetails () {
    
    const location = useLocation()
    
    return (
      <LocationInformation id={location.state.id} currentUser={location.state.currentUser}></LocationInformation>
    )
}
