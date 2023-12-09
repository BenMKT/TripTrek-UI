import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carImg from '../assets/images/car.png';
import '../styles/itemToDelete.css';

const ItemToDelete = () => (
  <Card className="card-item-to-delete">
    <Card.Img variant="top" src={carImg} alt="car image" />
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="danger">
        <i className="bi bi-trash" />
        <em className="text-delete">Delete</em>
      </Button>
    </Card.Body>
  </Card>
);

export default ItemToDelete;
