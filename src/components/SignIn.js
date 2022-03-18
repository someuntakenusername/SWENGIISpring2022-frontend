import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../contexts/AuthContext";
import { getUsers } from "../services/UserService";
const bcrypt = require('bcryptjs')

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    var users = (await getUsers()).data;
    var attemptUser = null;
    for (let index = 0; index < users.length; index++) {
      if (users[index].email.toLowerCase() === emailRef.current.value.toLowerCase()) {
        attemptUser = users[index];
      }
    }
    console.log(attemptUser);
    if (attemptUser == null){
        return setError("No Account For This Email. Try Again Or Create Account.");
    }
    if (!bcrypt.compareSync(passwordRef.current.value, attemptUser.password)){
        return setError("Incorrect Email/Password Combination. Try Again.");
    }
    setLoading(true);
    signin(attemptUser.email, attemptUser.firstName, attemptUser.lastName)
    setLoading(false);
  }
  return (
    <>
    {!currentUser && 
      <Card>
          
        <Card.Body>
          <h2 className="text-center mb-2">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmit(e)}>
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
            <Button
              className="w-100"
              disabled={loading}
              style={{ marginTop: 10 }}
              type="submit"
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>

      </Card>
}
      {!currentUser && <div className="w-100 text-center mt-2">Need an Account? Sign Up.</div>}
    </>
  );
}
