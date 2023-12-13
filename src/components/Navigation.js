import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
  FaBars, FaTimes,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { Button } from 'react-bootstrap';
import { logout } from '../redux/users/userSlice';
import logo from '../assets/logo.webp';
import { persistor } from '../redux/store';
import '../styles/navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const [activeNav, setActiveNav] = useState('/');
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive');
  };

  const { user } = useSelector((store) => store);
  let aboutUser;
  let aboutRole = true;
  if (user.user) {
    aboutUser = (<strong style={{ margin: 'auto' }}>{user.user.user.username}</strong>);
    aboutRole = user.user.user.role === 'admin';
  } else {
    aboutUser = (<strong>Please log-in first</strong>);
  }

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();// remove persisted infos
    localStorage.removeItem('username');
    window.location.href = '/home';
  };

  return (
    <>
      {' '}
      <button className="nav_btn" type="button" onClick={showNavbar} aria-label="Show Nav">
        <FaBars />
      </button>
      <div ref={navRef} className="sidebar_container_items">
        <div className="sidebar_container flex">
          <button className="nav_btn nav_btn_close" type="button" onClick={showNavbar} aria-label="Nave close">
            <FaTimes />
          </button>
          <div className="sidebar_container-uperhead flex">
            <div className="sidebar_container-logo"><img src={logo} alt="logo" /></div>
            <div>{aboutUser}</div>
            <div className="sidebar_container-list">
              <ul className="sidebar_list">
                <li className="sidebar-link">
                  <Link
                    onClick={() => setActiveNav('home')}
                    className={activeNav === 'home' ? 'active' : ''}
                    to="/home"
                  >
                    Cars
                  </Link>
                </li>
                <li className="sidebar-link">
                  <Link
                    onClick={() => setActiveNav('reserveform')}
                    className={activeNav === 'reserveform' ? 'active' : ''}
                    to="/reserveform"
                  >
                    Reserve
                  </Link>
                </li>
                <li className="sidebar-link">
                  <Link
                    onClick={() => setActiveNav('myreservations')}
                    className={activeNav === 'myreservations' ? 'active' : ''}
                    to="/myreservations"
                  >
                    Reservations
                  </Link>
                </li>
                {aboutRole && (
                  <>
                    <li className="sidebar-link">
                      <Link
                        onClick={() => setActiveNav('addCar')}
                        className={activeNav === 'addCar' ? 'active' : ''}
                        to="/addCar"
                      >
                        Add Car
                      </Link>
                    </li>
                    <li className="sidebar-link">
                      <Link
                        onClick={() => setActiveNav('delete')}
                        className={activeNav === 'delete' ? 'active' : ''}
                        to="/to_delete"
                        disabled={user.user.user.role !== 'admin'}
                      >
                        Delete Car
                      </Link>
                    </li>
                  </>
                )}
                <li
                  className="sidebar-link"
                  style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 40, backgroundColor: 'InfoBackground',
                  }}

                >
                  <Button className="btn-logout" onClick={handleLogout}>
                    logout
                  </Button>

                </li>
              </ul>
            </div>
          </div>
          <div className="sidbar_footer flex ">
            <div className="sidebar_socials flex">
              <FaTwitter />
              <FaFacebookF />
              <TiSocialGooglePlus />
              <FaVine />
              <FaPinterestP />
            </div>
            <small>&copy; 2023 </small>
          </div>

          <Outlet />
        </div>

      </div>
    </>
  );
};
export default Navigation;
