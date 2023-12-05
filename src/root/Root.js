import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => (
  <>
    <div className="nav">
      nav
    </div>
    <div id="details">
      <Outlet />
    </div>
  </>

);

export default Root;
