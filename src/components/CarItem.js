import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carItem.css';

const CarItem = (props) => {
  const { car } = props;
  return (
    car && (
      (
      <Card className="car-item">
        <div className="circle-container">
          <Card.Img variant="top" src={car.photo} alt="car image" />
        </div>
        <Card.Body>
          <Card.Title>{car.model}</Card.Title>
          <em className="points">....................</em>
          <Card.Text>
            {car.description}
          </Card.Text>
          <ul className="social-media">
            <li>
              <Link to="facebook.com" target="_blank">
                <i className="bi bi-facebook" />
              </Link>
            </li>
            <li>
              <Link to="twitter.com" target="_blank">
                <i className="bi bi-twitter-x" />
              </Link>
            </li>
            <li>
              <Link to="instagram.com" target="_blank">
                <i className="bi bi-instagram" />
              </Link>
            </li>
          </ul>
        </Card.Body>
      </Card>
      )
    ));
};

CarItem.propTypes = {
  car: PropTypes.shape({
    photo: PropTypes.string,
    model: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default CarItem;
