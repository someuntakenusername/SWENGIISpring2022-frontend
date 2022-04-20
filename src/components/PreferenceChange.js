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
Geocode.setApiKey("AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE");

//AIzaSyCJYrN6ByIeKbZxymQ7LaESn-lHUhMZEXE
export default function PreferenceChange() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [cost, setCost] = useState('2');
    const [reviews, setReviews] = useState('20');
    const [rating, setRating] = useState('3');
    const [contact, setContact] = useState('no');
    const city = useRef();
    const state = useRef();
    const [numErrorAttempt, setNumErrorAttempt] = useState(5);
    const { signin, currentUser } = useAuth();
    let navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        Geocode.fromAddress(city.current.value + ", " + state.current.value).then(
            (response) => {
                const prefDTO = {
                    id: currentUser.id,
                    cost: cost,
                    rating: rating,
                    reviews: reviews,
                    contact: contact,
                    city: city.current.value + ", " + state.current.value
                  };
                  console.log(prefDTO)
                axios.post("http://localhost:80/preference/createpreference", prefDTO).then(async (res) => {
                  if (currentUser){
                    navigate("../dashboard");

                  }
                });
            },
            (error) => {
                console.error(error);
            }
        );

    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-2">Set Location Preferences</h2>
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
                        <Form.Group id="rating" >
                            <Form.Label>Rating</Form.Label>
                            <select className="w-100" value={rating} onChange={(event) => setRating(event.target.value)}>
                                <option value={'1'}> ⭐ </option>
                                <option value={'2'}> ⭐ ⭐ </option>
                                <option value={'3'}> ⭐ ⭐ ⭐ </option>
                                <option value={'4'}> ⭐ ⭐ ⭐ ⭐ </option>
                                <option value={'5'}> ⭐ ⭐ ⭐ ⭐ ⭐ </option>
                            </select>
                        </Form.Group>
                        <Form.Group id="reviews" >
                            <Form.Label>Number Of Reviews</Form.Label>
                            <select className="w-100" value={reviews} onChange={(event) => setReviews(event.target.value)}>
                                <option value={'10'}> 10+ </option>
                                <option value={'20'}> 20+ </option>
                                <option value={'30'}> 30+ </option>
                                <option value={'40'}> 30+ </option>
                                <option value={'50'}> 50+ </option>
                            </select>
                        </Form.Group>
                        <Form.Group id="contact" >
                            <Form.Label>Contact Info Required?</Form.Label>
                            <select className="w-100" value={contact} onChange={(event) => setContact(event.target.value)}>
                                <option value={'yes'}> Yes </option>
                                <option value={'no'}> No </option>
                            </select>
                        </Form.Group>
                        <Form.Group id="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                ref={city}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                ref={state}
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

            </Card>

        </>
    );
}
