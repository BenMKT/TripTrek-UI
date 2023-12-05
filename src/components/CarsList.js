import React, {
  useRef, useState, useEffect,
} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/carsList.css';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import CarItem from './CarItem';

const CarsList = (props) => {
  // const { cars } = props;
  // const dispatch = useDispatch();
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const listContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
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
  }, []);

  // const listCars = cars.map((car) => (
  //     <li key={uuidv4()}
  //            className='itemCar'>
  //         <NavLink
  //               className="link-to-details"
  //             to='/details'
  //         >
  //             <CarItem car={car}/>
  //         </NavLink>
  //     </li>
  // ))

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

  return (
    <Container className="container-main">
      <header>
        <h1>LATEST MODELS</h1>
        <p>Please select a Car</p>
      </header>
      <em className="points">.........................</em>
      {/* <ul>{listCars}</ul> */}
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
          <li className="itemCar">
            <NavLink to="/details">
              <CarItem />
            </NavLink>
          </li>
          <li>
            <NavLink to="/details">
              <CarItem />
            </NavLink>
          </li>
          <li>
            <NavLink to="/details">
              <CarItem />
            </NavLink>
          </li>
          <li>
            <NavLink to="/details">
              <CarItem />
            </NavLink>
          </li>
          <li>
            <NavLink to="/details">
              <CarItem />
            </NavLink>
          </li>
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
