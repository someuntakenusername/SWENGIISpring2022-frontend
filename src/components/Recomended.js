import React, { Component } from 'react'
import { getPreferenceID } from '../services/PreferenceService'
import { Link } from "react-router-dom";

export default class Recomended extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            locations: null,
            renderLocations: []
        }
    }


    componentDidMount = async () => {
        console.log(this.state.currentUser)
        if (this.state.currentUser){
            this.setState({
                locations: await ((await getPreferenceID(this.state.currentUser.id)).data)
            })
            console.log(this.state.locations)
    
            let renderArray = [];
            for (let index = 0; index < this.state.locations.length; index++) {
                renderArray = [...renderArray, <li key={this.state.locations[index].name} style={{ paddingTop: 10 }}>{this.state.locations[index].name + ": " + this.state.locations[index].rank}</li>]
            }
            this.setState({
                renderLocations: renderArray
            })
            console.log(this.state.renderLocations)
        }else{
            this.setState({
                renderLocations: <div></div>
            })
        }
       
    }

    render() {
        if (this.state.renderLocations.length < 1){
            console.log("Here")
            return (
                <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/preferenceChange"> Update Your Preferences! </Link></div>
            )
        }else{
            return (
                <ul style={{maxHeight: '45vh', overflowY: 'scroll'}}>
                    {this.state.renderLocations}
                </ul>
            )
        }
       
    }
}
