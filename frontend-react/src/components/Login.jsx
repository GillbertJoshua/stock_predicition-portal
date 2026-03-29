import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const userData = { username, password };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/token/',
        userData
      );

      // ✅ store tokens
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);

      // ✅ redirect after login
      navigate('/');

    } catch (error) {
      console.log(error);
      setError("Invalid username or password ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>

      <div className="card bg-dark text-light p-4 shadow" style={{ width: "400px" }}>

        <h3 className="text-center text-warning mb-3">
          Login
        </h3>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">Username / Email</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* ✅ Error Message */}
          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          {/* ✅ Loading Button */}
          <button 
            type="submit"
            className="btn btn-warning w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Please Wait...
              </>
            ) : (
              "Login"
            )}
          </button>

        </form>

        <hr className="border-secondary my-3" />

        <div className="d-grid">
          <Link to="/Register" className="btn btn-outline-light">
            Register
          </Link>
        </div>

        <p className="text-center text-muted small mt-2">
          New user? Sign up here
        </p>

      </div>
    </div>
  );
}

export default Login;







