import React, { Component } from 'react'
import { leaveReview } from '../services/ReviewService';
import { useNavigate } from "react-router-dom";

export default class LeaveReview extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', id: props.id};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleChange(event) {
        this.setState({value: event.target.value});
        
      }
    
      handleSubmit(event) {
        leaveReview(this.state.id, this.state.value)
        alert("Thanks! Review Submitted.")
        event.preventDefault();
      }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <h1><u>Leave A Review</u></h1>
                <form onSubmit={this.handleSubmit} style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <label style = {{alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                    
                        <textarea style={{height: '30vh', overflowWrap:'break-word'}} value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input style={{marginLeft: 10}}type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
