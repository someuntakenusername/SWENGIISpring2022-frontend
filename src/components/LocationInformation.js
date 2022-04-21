import React, { Component } from 'react'
import { byID } from '../services/YelpService'
import { Link, useLocation } from "react-router-dom";

export default class LocationInformation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            locationID: props.id,
            location: null,
            name: "",
            imageSrc: "",
            price: undefined,
            rating: undefined,
            reviewCount: undefined
        }
    }


    componentDidMount = async () => {
        this.setState({
            location: await ((await byID(this.state.locationID)).data)
        })
        this.setState({
            name: this.state.location.name,
            imageSrc: this.state.location.imageSrc ? this.state.location.imageSrc : "",
            cost: this.state.location.price !== -1 ? this.state.location.price : undefined,
            rating: this.state.location.rating !== -1 ? this.state.location.rating : undefined,
            reviewCount: this.state.location.reviewCount !== -1 ? this.state.location.reviewCount : undefined
        })
    }

  render() {
    return (
      <div style = {{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1><u>{this.state.name}</u></h1>
        <Link to={"/leaveReview"} state = {{id: this.state.locationID}}>Leave A Review</Link>
        <Link to="/readReview" state = {{id: this.state.locationID}}>Read Reviews</Link>
       { this.state.imageSrc !== "" && <img src={this.state.imageSrc} style={{width: '30vh', height: '30vh'}}/>}
       {this.state.cost && <h3>{"Cost: " + this.state.cost + "/4"}</h3>}
       {this.state.rating && <h3>{"Rating: " + this.state.rating + "/5"}</h3>}
       {this.state.reviewCount && <h3>{"Number of Reviews: " + this.state.reviewCount}</h3>}
      </div>
    )
  }
}
