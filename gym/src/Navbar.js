import { Outlet, Link } from "react-router-dom";
import "./styling/Navbar.css";
import logo from './logos.png';
const Navbar = () => {
  return (
    <>
      <nav id="NAVBAR">
        <h1>
          <img src={logo} alt="Logo" />
          <Link to="/" id="nav_main">Fitness <span>Gym</span></Link></h1>
        <ul>
          <li>
            <Link to="/" id="nav_opt">Home</Link>
          </li>
          <li>
            <Link to="/about" id="nav_opt">About</Link>
          </li>
          <li>
            <Link to="/offer" id="nav_opt">Offer</Link>
          </li>
          <li>
            <Link to="/customer" id="nav_opt">Customer</Link>
          </li>
          <li>
            <Link to="/contact" id="nav_opt">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Navbar;