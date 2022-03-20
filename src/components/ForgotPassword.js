import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../contexts/AuthContext";
import { getUsers } from "../services/UserService";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  async function handleSubmit(e) {
    
  }
  return (
    <>

        <Card>

          <Card.Body>
            <h2 className="text-center mb-2">Send Password Reset Email</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required></Form.Control>
              </Form.Group>
            
              <Button
                className="w-100"
                style={{ marginTop: 10 }}
                type="submit"
              >
                Begin Password Reset
              </Button>
            </Form>
          </Card.Body>

        </Card>
        <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/SignIn"> Back To Sign In? Click Here. </Link></div> 

    </>
  );
}
