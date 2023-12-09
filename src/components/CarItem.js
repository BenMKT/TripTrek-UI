import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import carImg from '../assets/images/car.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carItem.css';

const CarItem = (props) =>
  // const { car } = props;
  (
    // car && (
    (
      <Card className="car-item">
        <div className="circle-container">
          <Card.Img variant="top" src={carImg} alt="car image" />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <em className="points">....................</em>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card &rsquos; s content.
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
  );

// CarItem.propTypes = {
//   car: PropTypes.shape ({
//     // model: PropTypes.string,
//     // color: PropTypes.string,
//     // year: PropTypes.number
//   })
// };

export default CarItem;
