import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import PropTypes from InputGroup
const SearchBar = () => {
  // const [cars, carsToDisplay] = props
  const [value, setValue] = useState([]);
  const handleChange = (value) => {
    setValue(value);
    const result = cars.filter((car) => (
      value && car.carName.toLowerCase().include(value)
    ));
    carsToDisplay(result);
  };

  const handleFocus = (e) => {
    if (e.target.value === '') {
      carsToDisplay(companies);
    }
  };

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm"><i className="bi bi-search" style={{ color: 'black' }} /></InputGroup.Text>
      <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        // value={value}
        // onChange={(e) => handleChange(e.target.value)}
        // onBlur={(e) => handleFocus(e)}
      />
    </InputGroup>
  );
};

// SearchBar.propTypes = {
//     cars: PropTypes.arrayOf(PropTypes.shape()).isRequired,
//     carsToDisplay: PropTypes.func.isRequired,
//   };

export default SearchBar;
