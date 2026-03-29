import React, { useState } from 'react';
import '../assets/css/reg.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading ,setLoading] =useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      username,
      first_name,
      last_name,
      email,
      password
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/register/',
        userData
      );

      console.log(response.data);

      // ✅ success handling
      setSuccess(true);
      setError({});

      // ✅ clear form
      setUsername("");
      setFirstName("");
      setLastName("");
      setMail("");
      setPassword("");


    } catch (err) {
      console.log(err);

      // ✅ proper error handling
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError({ general: "Something went wrong!" });
      }
      setSuccess(false);
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>

      <div className="card bg-dark text-light p-4 shadow" style={{ width: "400px" }}>

        <h3 className="text-center text-warning mb-3">
          Create Account
        </h3>

        <form onSubmit={handleRegistration}>

          {/* Username */}
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error.username && <small className="text-danger">{error.username}</small>}
          </div>

          {/* First Name */}
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setMail(e.target.value)}
            />
            {error.email && <small className="text-danger">{error.email}</small>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <small className="text-danger">{error.password}</small>}
          </div>

          {/* General Error */}
          {error.general && (
            <div className="alert alert-danger">{error.general}</div>
          )}

          {/* Success Message */}
          {success && (
            <div className="alert alert-success mb-2">
              Registration Successful 🚀
            </div>
          )}
          <button 
              type="submit" 
              className="btn btn-warning w-100" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Please Wait...
                </>
              ) : (
                "Register"
              )}
            </button>

          

        </form>

        <hr className="border-secondary my-3" />

        <Link to="/login" className="btn btn-outline-light w-100">
          Login
        </Link>

      </div>
    </div>
  );
}

export default Register;