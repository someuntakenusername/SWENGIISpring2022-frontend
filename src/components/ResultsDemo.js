import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ResultsDemo() {
    const { state } = useLocation();
    console.log(state[0].name)
    const [locations, setLocations] = useState([]);


    function exportLocations() {
        let renderArray = [];
        for (let index = 0; index < state.length; index++) {
            renderArray = [...renderArray, <li key={state[index].name}>{state[index].name + ": " + state[index].rank}</li>]
        }
        return renderArray;
    }
    
    return (
        <ul>
            {exportLocations()}
            </ul>
    )
}
