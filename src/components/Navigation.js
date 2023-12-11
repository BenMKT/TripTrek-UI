import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import '../styles/navigation.scss';
import NavigationLink from './NavigationLink';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Reserve', path: '/reserve' },
  { label: 'My reservations', path: '/myReservations' },
  { label: 'Add', path: '/add' },
  { label: 'Delete', path: '/delete' },
  { label: 'Login', path: '/login' },
];

const Navigation = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const user = 'ali';

  const closeNavbar = () => {
    setOpen(false);
  };

  const handleNavLinkClick = () => {
    if (open) {
      closeNavbar();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-group">
          <div className="nav-header flex-md-column">
            <button
              data-testid="navbar-toggler-button"
              className="navbar-toggler-button"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <span className="navbar-toggler-icon" />
            </button>

            {user && (
              <div className="user-name order-md-1">
                <h3 className="welcome mb-0 fw-bolder">
                  Welcome,
                  {' '}
                  {user}
                </h3>
              </div>
            )}

            <Link className="nav-logo d-flex justify-content-center" to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div
            data-testid="navbar-collapse"
            className={`collapse navbar-collapse ${open ? 'show' : 'desktop-show'}`}
          >
            <ul className="navbar-nav">
              {links.map((link) => (
                <NavigationLink
                  key={link.label}
                  label={link.label}
                  path={link.path}
                  action={handleNavLinkClick}
                />
              ))}

              {user && (
                <li>
                  <button type="button" className="nav-link logout-button">
                    Log out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="credits">
          <small> &copy; 2023 - All rights reserved</small>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
