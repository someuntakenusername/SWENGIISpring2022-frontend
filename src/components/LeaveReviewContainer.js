import React, { Component } from 'react'
import { byID } from '../services/YelpService'
import { Link, useLocation } from "react-router-dom";
import LocationInformation from './LocationInformation';
import LeaveReview from './LeaveReview';

export default function LeaveReviewContainer () {
    
    const location = useLocation()
    
    return (
      <LeaveReview id={location.state.id}></LeaveReview>
    )
}
