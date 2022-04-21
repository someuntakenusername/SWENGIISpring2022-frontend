import React, { Component } from 'react'
import { getPreferenceID } from '../services/PreferenceService'
import { Link } from "react-router-dom";
import { getbookmarks } from '../services/BookmarkService';
import { byID } from '../services/YelpService';

export default class Bookmarked extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            bookmarks: [],
            locations: [],
            renderLocations: []
        }
    }


    componentDidMount = async () => {
        if (this.state.currentUser){
            this.setState({
                bookmarks: await((await getbookmarks(this.state.currentUser.id)).data),
            })
        }
        console.log(this.state.bookmarks)
        var location = [];
        for (let index = 0; index < this.state.bookmarks.length; index++) {
            const element = this.state.bookmarks[index];
            var loc = await((await byID(element.locationID)).data)
            location = [...location, loc]
        }
        this.setState({
            locations: location
        })
        console.log(this.state.locations)

      

        let renderArray = [];
        for (let index = 0; index < this.state.locations.length; index++) {
            renderArray = [...renderArray, <Link to={"details"} state = {{id: this.state.locations[index].id, currentUser: this.state.currentUser}}><li key={this.state.locations[index].id} style={{ paddingTop: 10 }}>
            
                    {this.state.locations[index].name}
              
                </li></Link>]
        }
        this.setState({
            renderLocations: renderArray
        })
        console.log(this.state.renderLocations)

    
            
       
    }

    render() {
        
        if (this.state.renderLocations.length < 1){
            return (
                <div className="w-100 text-center mt-2">No Bookmarks!</div>
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
