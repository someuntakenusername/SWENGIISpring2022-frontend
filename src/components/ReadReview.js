import React, { Component } from 'react'
import { getReviewID, leaveReview } from '../services/ReviewService';

export default class ReadReview extends Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id};
      }

      componentDidMount = async () => {
        this.setState({
            reviews: await ((await getReviewID(this.state.id)).data),
            renderLocations: []
        })
        console.log(this.state.reviews)

        let renderArray = [];
            for (let index = 0; index < this.state.reviews.length; index++) {
                renderArray = [...renderArray, <p1>{index + 1 + ")    " + this.state.reviews[index].reviewtext}</p1>]
            }
            this.setState({
                renderLocations: renderArray
            })
      }

  
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <h1><u>Reviews</u></h1>
                {this.state.renderLocations}
            </div>
        )
    }
}
