import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>

      <div className="card bg-dark text-light p-4 shadow" style={{width: "400px"}}>

        {/* Title */}
        <h3 className="text-center text-warning mb-3">
          Login
        </h3>

        {/* Form */}
        <form>

          <div className="mb-3">
            <label className="form-label">Username / Email</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter username or email" 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter password" 
            />
          </div>

          {/* Login Button */}
          <button className="btn btn-warning w-100 fw-semibold">
            Login
          </button>

        </form>

        {/* Divider */}
        <hr className="border-secondary my-3" />

        {/* Create Account Button */}
        <div className="d-grid">
          <Link to="/Register" className="btn btn-outline-light">
            Register
          </Link>
        </div>

        {/* Optional small text */}
        <p className="text-center text-muted small mt-2">
          New user? Sign up here
        </p>

      </div>

    </div>
  );
}

export default Login;