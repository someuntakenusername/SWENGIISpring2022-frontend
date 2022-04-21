import React, { Component } from 'react'
import { byID } from '../services/YelpService'
import { Link, useLocation } from "react-router-dom";
import LocationInformation from './LocationInformation';
import LeaveReview from './LeaveReview';
import ReadReview from './ReadReview';

export default function ReadReviewContainer () {
    
    const location = useLocation()
    
    return (
      <ReadReview id={location.state.id}></ReadReview>
    )
}
