// DetailsPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useLocation } from 'react-router-dom';
import ReserveCar from './ReserveCar';
import '../styles/carDetails.css';

const DetailsPage = () => {
  const location = useLocation();
  const car = location.state.profile;

  return (
    <Container className="details-container">
      <div>
        <Card className="img-container">
          <Card.Img variant="top" src={car.photo} alt="car image" />
        </Card>
        <Card className="car-features">
          <Card.Header>
            <h2>{car.model}</h2>
            <em>Price deposit upon any car purchase</em>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p className="key">Finance fee</p>
              <p className="value">{car.finance_fee}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="key">Option to purchase fee</p>
              <p className="value">{car.purchase_fee}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="key">amount payable</p>
              <p className="value">1234</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="key">Duration</p>
              <p className="value">{car.amount_payable}</p>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Text>
              <strong>
                {car.apr}
                {' '}
                APR
              </strong>
              {' '}
              Representative
            </Card.Text>
            <div className="links">
              <div>
                <Link to="/">
                  DISCOVER MORE MODELS
                  <i className="bi bi-chevron-compact-right" />
                </Link>
              </div>
              <ReserveCar car={car} />
            </div>
          </Card.Body>
        </Card>
      </div>
      <Link
        to="/"
        className="link-back"
      >
        <i className="bi bi-caret-left" />
      </Link>
    </Container>
  );
};

export default DetailsPage;
