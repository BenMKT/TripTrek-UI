import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ItemToDelete from './ItemToDelete';
import { fetchCars } from '../utils/fetchApi';
import { arrCars } from '../redux/cars/carsSlice';
import '../styles/itemToDelete.css';

const ToDeleteList = () => {
  const { isLoading, error } = useSelector((store) => store.cars);
  const cars = useSelector(arrCars)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCars())
  },[dispatch])

  const listOfCars = cars.map((car) => (
    <li key={uuidv4()}>
      <ItemToDelete car={car} />
    </li>
  ));

  let content;
  if (isLoading) {
    content = (
    <div className='loading-container'>
      <div className='loading-spinner'></div>
    </div>);
  } else if (error) {
    content = (
        <div className="error-wrapper">
          <div className="error-msg">
            <h2>Error Occurred</h2>
            <p>Something went wrong. Please try again later.</p>
          </div>
        </div>
    );
  } else if (cars.length) {
    content = (
      <ul>
        {listOfCars}
      </ul>
    );
  } else {
    content = <div>No car yet</div>;
  }
  return (
    <Container className="container-list-to-delete">
      <header>
        <h1>Delete a car</h1>
      </header>
      <div>
        {content}
      </div>
    </Container>

  );
};

export default ToDeleteList;
