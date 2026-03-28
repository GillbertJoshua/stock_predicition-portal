import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold text-warning" href="#">
          📈 StockAI
        </a>

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
              <a className="nav-link" href="#">Dashboard</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Predict</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">History</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Market</a>
            </li>

            {/* Button */}
            <li className="nav-item">
              <button className="btn btn-warning fw-semibold">
                Analyze
              </button>
            </li>

            {/* Account */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                👤 Account
              </a>

              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-success" href="#">Login</a></li>
                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>  
      </div>
    </nav>
  );
}

export default Navbar;