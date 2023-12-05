import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import carImg from '../assets/images/car.png';
import '../styles/carDetails.css';

const DetailsPage = () => (
  <Container>
    <Card className="img-container">
      <Card.Img variant="top" src={carImg} alt="car image" />
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        <h2>Car s Model</h2>
        <em>Price deposit upon any car purchase</em>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <p className="key">Finance fee</p>
          <p className="value">123</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="key">Option to purchase fee</p>
          <p className="value">123</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="key" />
          amount payable
          <p className="value">1234</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="key" />
          Duration
          <p className="value">1234</p>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          <bold>5.9% APR</bold>
          {' '}
          Representative
        </Card.Text>
        <Link to="/">
          DISCOVER MORE MODELS
          <i className="bi bi-chevron-compact-right" />
        </Link>
        <Button variant="primary">
          <i className="bi bi-save2" />
          Reserve
          {' '}
          <em id="rounded-arrow"><i className="bi bi-chevron-right" /></em>
        </Button>
      </Card.Body>
    </Card>
  </Container>
);

export default DetailsPage;
