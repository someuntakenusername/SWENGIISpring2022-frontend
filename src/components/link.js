import React, { Component, useState, useEffect, createRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth, AuthContext } from '../contexts/AuthContext';


export default function Links(props){
    const { signin, currentUser } = useAuth();
    const [user, setUser] = useState(null);
    
    return (
        <>
          <li>
          { !currentUser &&<Link to={props.to}>{props.message}</Link>}  
        </li> 
        
     </>
    );

}
