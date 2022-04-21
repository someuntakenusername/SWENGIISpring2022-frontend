import React, { Component } from 'react'
import { getPreference, getPreferenceID } from '../services/PreferenceService'
import Geocode from "react-geocode";
import { MapComponent } from './MapComponent'
import useWindowDimensions from '../FunctionReferences/WindowDimensions'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps"



export default class MapWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            currentUser: props.currentUser,
            coords: {lat: 39.8283, lng: -98.5795},
            preference: null,
            markers: []
        }
    }


    componentDidMount = async () => {
        if (this.state.currentUser) {
            this.setState({
                locations: await ((await getPreferenceID(this.state.currentUser.id)).data),
                preference: await ((await getPreference(this.state.currentUser.id)).data),
            })
            console.log(this.state.preference)
            if (this.state.preference){
                await Geocode.fromAddress(this.state.preference.city).then(
                    (response) => {
                        console.log(response.results[0].geometry.location)
                        this.setState({
                            coords: response.results[0].geometry.location
                        })
                    },
                    (error) => {
                        console.error(error);
                    }
                );
                console.log(this.state.locations)

                var renderArray = [];
                for (let index = 0; index < this.state.locations.length; index++) {
                    const element = this.state.locations[index];
                    renderArray = [...renderArray, <Marker
                        position={{lat: this.state.locations[index].latitude, lng: this.state.locations[index].longitude}}


                        clickable={true}
                        onClick={()=>alert(this.state.locations[index].name)}
                    ></Marker>]
                }
                await this.setState({
                    markers: renderArray
                })

            }
           
            
        }


    }


    render() {
        console.log(this.state)
        return (
            <div style = {{display: 'flex', flexDirection: 'row'}}>
    <MapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: '100vh', width: '100vw' }} />}
      containerElement={<div style={{ height: '100vh', width: '100vw' }} />}
      mapElement={<div style={{ height: '100vh', width: '100vw' }} />}
      lng = {this.state.coords.lat}
      long = {this.state.coords.lng}
      locations = {this.state.locations}
      markers = {this.state.markers}

      

    >
    </MapComponent>
  
  </div>
        )
    }
}
