import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ItemToDelete from './ItemToDelete';
import '../styles/itemToDelete.css';

const ToDeleteList = () => {
  const { cars, isLoading, error } = useSelector((store) => store.cars);
  const listOfCars = cars.map((car) => (
    <li key={uuidv4()}>
      <ItemToDelete car={car} />
    </li>
  ));

  let content;
  if (isLoading) {
    content = <div>Is Loading...</div>;
  } else if (error) {
    content = <div>something went wrong</div>;
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
