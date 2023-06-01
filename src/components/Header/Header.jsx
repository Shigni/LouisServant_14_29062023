import './Header.scss';
import Logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

export function Header() {
  // Template
  return (
    <nav>
      <div className="nav-logo-title">
        <img alt="Logo" className="nav-logo" src={Logo} />
        <h1 className="nav-title">Wealth Health - HRnet</h1>
      </div>

      <div className="nav-links">
        <NavLink className="nav-link" to="/">
          {/* <i className="nav-icon ri-add-circle-line"></i> */}
          <span>Create a new employee</span>
        </NavLink>
        <NavLink className="nav-link" to="/list">
          {/* <i className="nav-icon ri-list-check"></i> */}
          <span>View Current Employees</span>
        </NavLink>
      </div>
    </nav>
  );
}
