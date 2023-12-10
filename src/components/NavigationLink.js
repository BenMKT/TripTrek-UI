import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ label, path, action }) => {
  const user = null;
  const { admin: isAdmin } = user ?? {};

  // Validate if the user is admin to display Add and Delete links
  if ((label === 'Add' || label === 'Delete') && !isAdmin) return null;

  // Validate if the user is not logged in to display just Home and Login links
  if ((label !== 'Home' && label !== 'Login') && !user) return null;

  // Validate if the user is logged in to hide Login link
  if (label === 'Login' && user) return null;

  return (
    <li>
      <NavLink className="nav-link" to={path} onClick={action}>
        {label}
      </NavLink>
    </li>
  );
};
export default NavigationLink;
