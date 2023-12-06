import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => (
  <div className="container-root">
    <div className="nav">
      nav
    </div>
    <div id="details">
      <Outlet />
    </div>
  </div>

);

export default Root;
