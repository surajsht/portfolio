import { FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="nav-content">
          <div className="logo">
            <h1> Suraj </h1>
          </div>

          <ul className="menu-item-container">
            <li className="menu-item">
              <a href="#home"> Home </a>
            </li>
            <li className="menu-item">
              <a href="#about"> About </a>
            </li>
            <li className="menu-item">
              <a href="#skills"> Skills </a>
            </li>
            <li className="menu-item">
              <a href="#projects"> Projects </a>
            </li>
            <li className="menu-item">
              <a href="#contact"> Contact </a>
            </li>
          </ul>

          <FaBars id="offcanvas-menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
