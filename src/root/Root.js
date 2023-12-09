import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Root = () => (
  <div className="container-root">
    <div className="nav">
      <Navigation />
    </div>
    <div id="details">
      <Outlet />
    </div>
  </div>

);

export default Root;
