import React, { Component } from 'react'
import { byID } from '../services/YelpService'
import { Link } from "react-router-dom";
import { createBookmark, getbookmarks, removeBookmark } from '../services/BookmarkService';
import { Button } from 'react-bootstrap';

export default class LocationInformation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            locationID: props.id,
            location: null,
            bookmarks: [],
            name: "",
            imageSrc: "",
            price: undefined,
            rating: undefined,
            reviewCount: undefined,
            isBookmarked: false
        }
        console.log(this.state)
    }


    componentDidMount = async () => {
        this.setState({
            location: await ((await byID(this.state.locationID)).data),
        })
        if (this.state.currentUser){
          this.setState({
            bookmarks: await((await getbookmarks(this.state.currentUser.id)).data),
        })
        }
        this.setState({
            name: this.state.location.name,
            imageSrc: this.state.location.imageSrc ? this.state.location.imageSrc : "",
            cost: this.state.location.price !== -1 ? this.state.location.price : undefined,
            rating: this.state.location.rating !== -1 ? this.state.location.rating : undefined,
            reviewCount: this.state.location.reviewCount !== -1 ? this.state.location.reviewCount : undefined
        })
        console.log(this.state.locationID)
        console.log(this.state.bookmarks)
        var isBookmarked = false;
      for (let index = 0; index < this.state.bookmarks.length; index++) {
        const element = this.state.bookmarks[index];
        if (element.locationID === this.state.locationID){
          isBookmarked = true;
        }
      }
      if (isBookmarked === true){
        this.setState({
          isBookmarked: true
        })
      }else{
        this.setState({
          isBookmarked: false
        })
      }

    }

    handleClick1 = async() => {await ((await removeBookmark(this.state.locationID, this.state.currentUser.id))); this.setState({isBookmarked: false})};
    handleClick2 = async() => {await ((await createBookmark(this.state.locationID, this.state.currentUser.id))); this.setState({isBookmarked: true})};


  render() {

    return (
      <div style = {{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1><u>{this.state.name}</u></h1>
        {this.state.isBookmarked && <Button
      variant='primary'
      size='sm'
      style={{marginBottom: 20, marginTop: 20}}
      onClick={this.handleClick1}
    >
      Remove Bookmark
    </Button>}
    {!this.state.isBookmarked && this.props.currentUser &&<Button
      variant='primary'
      size='sm'
      style={{marginBottom: 20, marginTop: 20}}
      onClick={this.handleClick2}
    >
      Bookmark
    </Button>}
    {this.state.currentUser && 
        <Link to={"/leaveReview"} state = {{id: this.state.locationID}}>Leave A Review</Link>
      }
        <Link to="/readReview" state = {{id: this.state.locationID}}>Read Reviews</Link>
   
       { this.state.imageSrc !== "" && <img alt='' src={this.state.imageSrc} style={{width: '30vh', height: '30vh'}}/>}
       {this.state.cost && <h3>{"Cost: " + this.state.cost + "/4"}</h3>}
       {this.state.rating && <h3>{"Rating: " + this.state.rating + "/5"}</h3>}
       {this.state.reviewCount && <h3>{"Number of Reviews: " + this.state.reviewCount}</h3>}
      </div>
    )
  }
}
