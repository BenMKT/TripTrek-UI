import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../utils/AuthContext";
import '../styles/loginSignIn.css'

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setError('');
        setLoading(true);
        await login(email, password);
        // redirect to the index of the root
        navigate('/');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <Card className="w-100" style={{ maxWidth: '400px' }}>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-3" type="submit">
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      );
    };
    
    export default Login;
