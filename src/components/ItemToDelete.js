import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeACar } from '../utils/fetchApi';
import '../styles/itemToDelete.css';

const ItemToDelete = (props) => {
  const { car } = props;
  const dispatch = useDispatch();

  return (
    <Card className="card-item-to-delete">
      <Card.Img variant="top" src={car.photo} alt="car image" />
      <Card.Body>
        <Card.Title>{car.model}</Card.Title>
        <Card.Text>
          {car.description}
        </Card.Text>
        <Button variant="danger" onClick={() => { dispatch(removeACar(car.id)); }}>
          <i className="bi bi-trash" />
          <em className="text-delete">Delete</em>
        </Button>
      </Card.Body>
    </Card>
  );
};

ItemToDelete.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    photo: PropTypes.string,
    model: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ItemToDelete;
