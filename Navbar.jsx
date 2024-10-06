import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a separate CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Blood Portal</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donors">Donors</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
