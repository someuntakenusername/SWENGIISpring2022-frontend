import React, { Component } from 'react'
import { getPreferenceID } from '../services/PreferenceService'
import { Link } from "react-router-dom";
import { createLocation, editLocation, getUserLocations } from '../services/ReviewService';

import { Form } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { getOwnerById } from '../services/ownerService';
import { removeLocation } from '../services/ReviewService';

export default class OwnerLocations extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            locations: null,
            renderLocations: [],
            navigate:props.navigate,
            loc: null,
            showLoc: false
        }        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fillMarketInfo = this.fillMarketInfo.bind(this);

    }

    handleSubmit = async(e) => {
        e.preventDefault();
        await ((await removeLocation(this.state.loc.id, this.state.currentUser.id)))
        await ((await createLocation(this.state.loc.cost, this.state.loc.name, this.state.loc.address, this.state.loc.phone, this.state.currentUser.id)))
        this.setState({
            locations: await ((await getUserLocations(this.state.currentUser.id)).data),
        })
        this.setState({
            loc: null,
            showLoc: false
        })
    }


    fillMarketInfo() {
        this.setState({
            showLoc: true
        })
        console.log(this.state.loc)
    }


    componentDidMount = async () => {
        if (this.state.currentUser){
            this.setState({
                locations: await ((await getUserLocations(this.state.currentUser.id)).data),
                owner: await ((await getOwnerById(this.state.currentUser.id)).data)
            })
            console.log(this.state.locations)
            let renderArray = [];
            for (let index = 0; index < this.state.locations.length; index++) {
                renderArray = [...renderArray, <li key={this.state.locations[index].id} style={{ paddingTop: 10 }} onClick = {
                    () => {
                        this.setState({
                            loc: this.state.locations[index]
                        })
                        this.fillMarketInfo();
                    }
                }>
                
                        {"Name=" + this.state.locations[index].name + ": Address=" + this.state.locations[index].address + ": Cost=" + this.state.locations[index].cost}
                  
                    </li>]
            }
            this.setState({
                renderLocations: renderArray
            })
            
        }else{
            this.setState({
                //renderLocations: <div></div>
            })
        }
        console.log(this.state.locations)
       
    }

    render() {
        
            return (
                <>
                {!this.state.showLoc && this.state.owner && <ul style={{maxHeight: '45vh', overflowY: 'scroll'}}>
                    {this.state.renderLocations}
                    <Link to={"../addlocation"}>
                        Add A Location
                    </Link>
                </ul>
                }
            
                {this.state.showLoc && this.state.owner &&  <Card>
                <Card.Body>
                    <h2 className="text-center mb-2">Add Location</h2>
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Group id="price" >
                            <Form.Label>Price</Form.Label>
                            <select className="w-100" value={this.state.loc.cost} onChange={(event) => {
                                var location = this.state.loc
                                location.cost = event.target.value
                                this.setState({
                                    loc: location
                                })
                            }}>
                                <option value={'1'}>$</option>
                                <option value={'2'}>$$</option>
                                <option value={'3'}>$$$</option>
                                <option value={'4'}>$$$$</option>
                            </select>
                        </Form.Group>
                       
                        <Form.Group id="city">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.loc.name}
                                onChange={(value => {
                                    let loc = this.state.loc
                                    loc.name = value.target.value
                                    this.setState({
                                        loc: loc
                                    })
                                })}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="city">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.loc.address}
                                onChange={(value => {
                                    let loc = this.state.loc
                                    loc.address = value.target.value
                                    this.setState({
                                        loc: loc
                                    })
                                })}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="city">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.loc.phone}
                                onChange={(value => {
                                    let loc = this.state.loc
                                    loc.phone = value.target.value
                                    this.setState({
                                        loc: loc
                                    })
                                })}
                                required
                            ></Form.Control>
                        </Form.Group>
                        

                        <Button
                            className="w-100"
                         
                            style={{ marginTop: 10 }}
                            type="change"
                        >
                            Change
                        </Button>



                    </Form>
                </Card.Body>

            </Card>}
                </>
            )
        
       
    }
}
