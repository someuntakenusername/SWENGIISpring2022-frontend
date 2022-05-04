import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../contexts/AuthContext";
import { getUsers } from "../services/UserService";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameFirstRef = useRef();
  const nameLastRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError("Passwords don't match! Try Again!");
    }
    if (passwordRef.current.value.length <= 8) {
      return setError("Password must be greater than 8 characters");
    }
    var users = (await getUsers()).data;
    for (let index = 0; index < users.length; index++) {
      if (
        users[index].email.toLowerCase() === emailRef.current.value.toLowerCase()
      ) {
        return setError("Account Exists. Please Sign In");
      }
    }
    try {
      setError("");
      setLoading(true);
      signup(
        emailRef.current.value,
        nameFirstRef.current.value,
        nameLastRef.current.value,
        passwordRef.current.value
      );
      navigate("../home")
    } catch {
      e.preventDefault();
      setError("Failed To Create An Account");
    }
    setLoading(false);
  }
  return (
    <>
    {currentUser &&
        <div style = {{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
           {"You are already signed in!"}
        </div>
      }
      {!currentUser && <Card>
        <Card.Body>
          <h2 className="text-center mb-2">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group id="nameFirst">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                ref={nameFirstRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="nameLast">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                ref={nameLastRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button
              className="w-100"
              disabled={loading}
              style={{ marginTop: 10 }}
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
}
{!currentUser && 
      <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Have an account? Click Here. </Link></div> 
}
    </>
  );
}
