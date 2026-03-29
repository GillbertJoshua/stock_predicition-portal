import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary shadow-sm">
        <div className="container">

          {/* Logo */}

          <Link className="navbar-brand fw-bold text-warning" to="/">
            📈 StockAI
          </Link>


          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav ms-auto gap-3">

              <li className="nav-item">
                <Link className="nav-link" to="#">Dashboard</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">Predict</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">History</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">Market</Link>
              </li>

              {/* Button */}
              <li className="nav-item">
                <button className="btn btn-warning fw-semibold">
                  Analyze
                </button>
              </li>

              {/* Account */}
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-bs-toggle="dropdown"
                >
                  👤 Account
                </Link>

                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                  <li><Link className="dropdown-item text-success" to="/login">Login</Link></li>
                  <li><Link className="dropdown-item text-danger" to="Register">Register</Link></li>
                </ul>
              </li>
            </ul>
          </div>  
        </div>
      </nav>
    </>
  );
}

export default Navbar;