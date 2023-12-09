import React from 'react';
import { Container } from 'react-bootstrap';
import ItemToDelete from './ItemToDelete';
import '../styles/itemToDelete.css';
import SearchBar from './SearchBar';

const ToDeleteList = () => (
  <Container className="container-list-to-delete">
    <header>
      <h1>Delete a car</h1>
    </header>
    <SearchBar />
    <div>
      <ul>
        <li><ItemToDelete /></li>
        <li><ItemToDelete /></li>
        <li><ItemToDelete /></li>
        <li><ItemToDelete /></li>
        <li><ItemToDelete /></li>
      </ul>
    </div>
  </Container>

);

export default ToDeleteList;
