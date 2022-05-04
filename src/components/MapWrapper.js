import React, { Component } from 'react'
import { getPreference, getPreferenceID } from '../services/PreferenceService'
import Geocode from "react-geocode";
import { MapComponent } from './MapComponent'
import Marker from 'react-google-maps/lib/components/Marker';
import { MDBCol } from 'mdbreact';
import { Button } from 'react-bootstrap';
import LocationDetails from './LocationDetails';
import { searchLocation } from '../services/YelpService';

export default class MapWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            currentUser: props.currentUser,
            coords: { lat: 39.8283, lng: -98.5795 },
            preference: null,
            markers: [],
            showMarker: false,
            marketID: null,
            search: "",
            searchLocations: [],
            searchMarkers: []
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onclick = this.onclick.bind(this);
        this.onclick1 = this.onclick1.bind(this);

    }


    componentDidMount = async () => {
        if (this.state.currentUser) {
            this.setState({
                locations: await ((await getPreferenceID(this.state.currentUser.id)).data),
                preference: await ((await getPreference(this.state.currentUser.id)).data),
            })
            console.log(this.state.preference)
            if (this.state.preference) {
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
                    renderArray = [...renderArray,

                    <Marker
                        position={{ lat: this.state.locations[index].latitude, lng: this.state.locations[index].longitude }}
                        clickable={true}
                        onClick={() => {
                            this.setState({
                                showMarker: true,
                                marketID: this.state.locations[index].id
                            })
                        }}
                        icon= {{url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}}
                    ></Marker>]
                }
                await this.setState({
                    markers: renderArray
                })

            }


        }


    }

    onTextChange(event) {
        this.setState({
            search: event.target.value
        })
    }

    onclick = async() => {
        if (this.state.search !== ""){
            console.log("here")
            this.setState({
                searchLocations: await ((await searchLocation(this.state.search)).data)
            })
            console.log(this.state.searchLocations)
            console.log("here2")

            this.setState({
                searchMarkers: []
            })
                for (let index = 0; index < this.state.searchLocations.length; index++) {
                    this.setState({
                        searchMarkers: [...this.state.markers, <Marker
                            position={{ lat: this.state.searchLocations[index].latitude, lng: this.state.searchLocations[index].longitude }}
                            clickable={true}
                            onClick={() => {
                                
                                this.setState({
                                    showMarker: true,
                                    marketID: this.state.searchLocations[index].id
                                })
                                console.log(this.state);
                            }}
                            icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
                              
                        ></Marker>]
                    })
                }
        }
    }
    onclick1 = async() => {
        console.log("here")
        this.setState({
            marketID: null,
            search: "",
            showMarker: false
        })
        console.log(this.state.searchLocations + "here3")
        console.log("here2")
    }


    render() {
        console.log(this.state)
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <div style ={{display: 'flex', flexDirection: 'row'}}>
                {!this.state.showMarker && <MDBCol md="6" >
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.onTextChange} />
                        
                    </MDBCol>
                     }
                      {!this.state.showMarker && 
                    <Button onClick={this.onclick}>Search</Button>
                      }
                       {this.state.showMarker && 
                    <Button onClick={this.onclick1}>Back To Map</Button>
                      }
       
                </div>
                {!this.state.showMarker && <MapComponent
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC19VPIcLkYWXkFLwpUbAFWlEsj2EUGzsc&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: '100vh', width: '100vw' }} />}
                    containerElement={<div style={{ height: '100vh', width: '100vw' }} />}
                    mapElement={<div style={{ height: '100vh', width: '100vw' }} />}
                    lng={this.state.coords.lat}
                    long={this.state.coords.lng}
                    locations={this.state.locations}
                    markers={this.state.markers}
                    searchMarkers={this.state.searchMarkers}



                >
                </MapComponent>}
                {
                    this.state.showMarker && <div className="w-100" style={{ width: "100vh" }}>
                        <LocationDetails id={this.state.marketID} currentUser={this.state.currentUser}>

                        </LocationDetails>
                    </div>
                }

            </div>
        )
    }
}
