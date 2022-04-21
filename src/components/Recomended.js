import React, { Component } from 'react'
import { getPreferenceID } from '../services/PreferenceService'
import { Link } from "react-router-dom";

export default class Recomended extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            locations: null,
            renderLocations: [],
            navigate:props.navigate
        }
    }


    componentDidMount = async () => {
        if (this.state.currentUser){
            this.setState({
                locations: await ((await getPreferenceID(this.state.currentUser.id)).data)
            })
    
            let renderArray = [];
            for (let index = 0; index < this.state.locations.length; index++) {
                renderArray = [...renderArray, <Link to={"details"} state = {{id: this.state.locations[index].id, currentUser: this.state.currentUser}}><li key={this.state.locations[index].id} style={{ paddingTop: 10 }}>
                
                        {this.state.locations[index].name + ": " + this.state.locations[index].rank}
                  
                    </li></Link>]
            }
            this.setState({
                renderLocations: renderArray
            })
        }else{
            this.setState({
                renderLocations: <div></div>
            })
        }
       
    }

    render() {
        if (this.state.renderLocations.length < 1){
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
