
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo.png';  // Import the image here
import './Navbar.css';

const Logo = () => {
  const location = useLocation()
  const isVideoLibraryPage = location.pathname === '/Stream';

  return (
    <NavLink to="/" className={isVideoLibraryPage ? 'video-page-logo' : 'logo'}>
      <img src={logo} className={isVideoLibraryPage ? 'video-page-logo-img' : 'logo-img'} alt="Logo" /> 
    </NavLink>
  );
};

export default Logo;
