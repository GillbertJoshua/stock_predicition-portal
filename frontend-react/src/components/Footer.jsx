import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-light mt-5 pt-4 pb-2 border-top border-secondary">
      <div className="container text-center">

        {/* Brand */}
        <h5 className="text-warning fw-bold mb-2">
          📈 StockAI
        </h5>

        {/* Description */}
        <p className="text-muted small mb-3">
          Smart stock prediction using AI to help you make better decisions.
        </p>

        {/* Links */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="#" className="text-decoration-none text-light footer-link">Home</a>
          <a href="#" className="text-decoration-none text-light footer-link">Predict</a>
          <a href="#" className="text-decoration-none text-light footer-link">Market</a>
          <a href="#" className="text-decoration-none text-light footer-link">Contact</a>
        </div>
        
        {/* Social */}
        <div className="mb-3"> 
          <span className="me-3">🌐</span>
          <span className="me-3">🐦</span>
          <span className="me-3">💼</span>
        </div>

        {/* Copyright */}
        <p className="text-muted small">
          © 2026 StockAI. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;