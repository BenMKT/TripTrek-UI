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

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const listContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (cars.length) {
      const button = buttonRef.current;
      const listContainer = listContainerRef.current;
      const handleScroll = () => {
        setIsLeftDisabled(listContainer.scrollLeft === 0);
        setIsRightDisabled(
          listContainer.scrollLeft
        >= listContainer.scrollWidth
        - listContainer.clientWidth - button.offsetWidth,
        );
      };
      listContainer.addEventListener('scroll', handleScroll);
      return () => {
        listContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [car.length]);

  const listCars = cars.map((car) => (
    <li key={uuidv4()} className="itemCar">
      <NavLink className="link-to-details" to="/details">
        <CarItem car={car} />
      </NavLink>
    </li>
  ));

  const scrollLeft = () => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  let content;
  if (isLoading) {
    content = <div>Is loading...</div>;
  } else if (error) {
    content = <div>something went wrong</div>;
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
      <em className="points">.........................</em>
      {content}
    </Container>
  );
};

// CarsList.propTypes = {
//   cars: PropTypes.arrayOf (PropTypes.shape ({
//     id: PropTypes.number,
//     model: PropTypes.string,
//     color: PropTypes.string,
//     year: PropTypes.number
//   }))
// };

export default CarsList;
