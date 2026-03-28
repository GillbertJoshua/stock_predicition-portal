import React from 'react';

function Home() {
  return (
    <div className="container text-center mt-5">

      {/* Hero Section */}
      <div className="py-5">
        <h1 className="fw-bold text-warning mb-3">
          📈 Smart Stock Prediction
        </h1>

        <p className="text-light opacity-75 mb-4">
          Predict stock trends using AI and make smarter decisions
        </p>

        <button className="btn btn-warning px-4 py-2 fw-semibold">
          🚀 Start Prediction
        </button>
      </div>

      {/* Cards Section */}
      <div className="row mt-5 g-4">

        <div className="col-md-4">
          <div className="card bg-dark text-light border-secondary h-100 shadow">
            <div className="card-body">
              <h3>📊</h3>
              <h5 className="mt-2">Live Market</h5>
              <p className="text-muted">
                Track real-time stock prices and trends easily.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light border-secondary h-100 shadow">
            <div className="card-body">
              <h3>🤖</h3>
              <h5 className="mt-2">AI Prediction</h5>
              <p className="text-muted">
                Get smart predictions powered by machine learning.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light border-secondary h-100 shadow">
            <div className="card-body">
              <h3>📈</h3>
              <h5 className="mt-2">Analysis</h5>
              <p className="text-muted text-light">
                Simple and powerful stock analysis dashboard.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;