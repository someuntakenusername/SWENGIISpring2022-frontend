import React from 'react';
import searchYelp from '../services/YelpService';
class YelpComponent extends React.Component {

    constructor (props){
        super(props)
    
        this.state = {
            namesOfLocations: []
        }
    }

    componentDidMount = async() =>{
        var x = await searchYelp();
        for (let index = 0; index < x.length; index++) {
            this.setState({
                namesOfLocations:[...this.state.namesOfLocations, <li key={x[index].name}>{x[index].name}</li>]
            })
        }
        console.log(this.state.namesOfLocations)
    }

    render (){
        return(
            <div>
                <h1 className="text-center">
                    Restaurants In Waco 
                </h1>
                <ul>
                    {this.state.namesOfLocations}
                </ul>
            </div>
        );
    }
}

export default YelpComponent