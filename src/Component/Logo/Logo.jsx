
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo.png';  // Import the image here
import './Logo.css';

const Logo = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/';

  return (
    <NavLink to="/" className={isHomePage ? 'home-page-logo' : 'logo'}>
      <img src={logo} className='logo-img' alt="Logo" /> 
    </NavLink>
  );
};

export default Logo;
