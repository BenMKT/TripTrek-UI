import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import {
  Form, Modal, Alert, Button,
} from 'react-bootstrap';
import { createReservation } from '../utils/fetchApi';
import '../styles/reserveCar.css';

const ReserveCar = (props) => {
  const { car } = props;
  const dispatch = useDispatch();

  const [carId, setCarId] = useState('');
  const [city, setCity] = useState('');
  const [userId, setUserId] = useState('');
  const date = new Date();
  const [errors, setErros] = useState('');
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const { error, message } = useSelector((store) => store.reservations);
  const { user } = useSelector((store) => store.user);
  const { cars } = useSelector((store) => store.cars);

  useEffect(() => {
    if (user && user.user) {
      setUserId(user.user.id);
    }
  }, [user]);

  useEffect(() => {
    if (car) {
      setCarId(car.id);
    }
  }, [car]);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(createReservation({
        reservation: {
          user_id: userId,
          car_id: carId,
          date,
          city,
        },
      }));
    } catch (error) {
      setErros(error);
    }
  };

  return (
    <>
      {values.map((v) => (
        <Button key={uuidv4()} className="mb-2 rounded-pill" onClick={() => handleShow(v)}>
          <i className="bi bi-save2" />
          <em>Reserve</em>
          <em id="rounded-arrow"><i className="bi bi-chevron-right" /></em>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        {error && <Alert variant="danger">{error}</Alert>}
        {errors && <Alert variant="danger">{errors}</Alert>}
        {message && <Alert variant="info">{message}</Alert>}
        <div className="modal-controllers">
          <Modal.Header closeButton>
            <Modal.Title>
              Book
              {car ? car.model : 'a car'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Car description</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 controllers-reserve">
                <Form.Select
                  aria-label="Default select example"
                  className="rounded-pill"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>Cities</option>
                  <option value="Kinshasa">Kinshasa</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Lagos">Lagos</option>
                </Form.Select>
                {!car && (
                  <Form.Select
                    aria-label="Default select example"
                    className="rounded-pill"
                    onChange={(e) => setCarId(e.target.value)}
                  >
                    <option>Cars</option>
                    {cars
                      && cars.map((car) => (
                        <option key={uuidv4()} value={car.model}>
                          {car.model}
                        </option>
                      ))}
                  </Form.Select>
                )}
                <Button variant="primary rounded-pill" type="submit">
                  Book now
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

ReserveCar.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    model: PropTypes.string,
  }),
};

ReserveCar.defaultProps = {
  car: null,
};

export default ReserveCar;
