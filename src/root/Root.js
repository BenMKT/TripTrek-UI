import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Root = () => (
  <div className="container-root">
    <Navigation />
    <div id="details">
      <Outlet />
    </div>
  </div>

);

export default Root;
