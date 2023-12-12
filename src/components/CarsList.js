import React, {
  useRef, useState, useEffect,
} from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CarItem from './CarItem';
import { fetchCars } from '../utils/fetchApi';
import '../styles/carsList.css';

const CarsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const { cars, isLoading, error } = useSelector((store) => store.cars);

  const [isLeftDisabled, setIsLeftDisabled] = useState(false);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const listContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const listContainer = listContainerRef.current;

    if (listContainer) {
      const handleScroll = () => {
        setIsLeftDisabled(listContainer.scrollLeft === 0);
        setIsRightDisabled(
          listContainer.scrollLeft
            >= listContainer.scrollWidth - listContainer.clientWidth - 50,
        );
      };

      listContainer.addEventListener('scroll', handleScroll);

      return () => {
        listContainer.removeEventListener('scroll', handleScroll);
      };
    }
    return () => {};
  }, [cars.length]);

  const listCars = cars.map((car) => (
    <li key={uuidv4()} className="itemCar">
      <NavLink
        className="link-to-details"
        to="/details"
        state={{ profile: car }}
      >
        <CarItem car={car} />
      </NavLink>
    </li>
  ));

  const scrollLeft = () => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollLeft += 200;
    }
  };

  let content;
  if (isLoading) {
    content = <div>Is loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (cars.length) {
    content = (
      <div className="list-container" id="list-container">
        <Button
          variant="warning"
          className="button-left"
          onClick={scrollLeft}
          disabled={isLeftDisabled}
          ref={buttonRef}
        >
          <i className="bi bi-caret-left" />
        </Button>
        <ul
          className="carsItem-list"
          id="carsItem-list"
          ref={listContainerRef}
        >
          {listCars}
        </ul>
        <Button
          variant="warning"
          className="button-right"
          onClick={scrollRight}
          disabled={isRightDisabled}
        >
          <i className="bi bi-caret-right" />
        </Button>
      </div>
    );
  } else {
    content = <div>No car yet</div>;
  }

  return (
    <Container className="container-main">
      <header>
        <h1>LATEST MODELS</h1>
        <p>Please select a Car</p>
      </header>
      {content}
    </Container>
  );
};

export default CarsList;
