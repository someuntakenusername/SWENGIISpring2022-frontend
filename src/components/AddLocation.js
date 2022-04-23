import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../contexts/AuthContext";
import { getUsers } from "../services/UserService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { inspect } from 'util' // or directly


import searchYelp from "../services/YelpService";
import Geocode from "react-geocode";
import { createLocation } from "../services/ReviewService";
Geocode.setApiKey("AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE");

//AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE
export default function AddLocation() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [cost, setCost] = useState('2');
    const [reviews, setReviews] = useState('20');
    const [rating, setRating] = useState('3');
    const [contact, setContact] = useState('no');
    const address = useRef();
    const phone = useRef();
    const name = useRef();
    const [numErrorAttempt, setNumErrorAttempt] = useState(5);
    const { signin, currentUser } = useAuth();
    let navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        console.log(cost)
       console.log(address.current.value)
       console.log(phone.current.value)
       console.log(name.current.value)
       createLocation(cost, name.current.value, address.current.value, phone.current.value, currentUser.id)
       navigate("../dashboard")
    }


    return (
        <>
            {!currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
            }
            {currentUser && <Card>
                <Card.Body>
                    <h2 className="text-center mb-2">Add Location</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group id="price" >
                            <Form.Label>Price</Form.Label>
                            <select className="w-100" value={cost} onChange={(event) => setCost(event.target.value)}>
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
                                ref={name}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="city">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                ref={address}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="city">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                ref={phone}
                                required
                            ></Form.Control>
                        </Form.Group>
                        

                        <Button
                            className="w-100"
                            disabled={loading}
                            style={{ marginTop: 10 }}
                            type="change"
                        >
                            Change
                        </Button>



                    </Form>
                </Card.Body>

            </Card>}

        </>
    );
}
