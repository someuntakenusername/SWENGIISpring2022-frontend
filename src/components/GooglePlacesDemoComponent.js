import React from "react";
import { Component } from "react";

import searchPlaces from "../services/PlacesService";

export default class GooglePlacesDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfPlaces: [],
    };
  }

  componentDidMount = async()=>{
    var x = await searchPlaces();
        for (let index = 0; index < x.length; index++) {
            this.setState({
                nameOfPlaces:[...this.state.nameOfPlaces, <li key={x[index].name}>{x[index].description}</li>]
            })
        }
        console.log(this.state.nameOfPlaces)
}

  render() {
    return (
      <div>
            <div>
                <h1 className="text-center">
                    Places Autocomplete For Search (Default Waco)
                </h1>
                <ul>
                    {this.state.nameOfPlaces}
                </ul>
            </div>
      </div>
    );
  }
}
