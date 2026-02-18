import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AutoHire</h1>
          <p>The modern platform connecting talented freelancers with innovative businesses</p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose AutoHire?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>For Clients</h3>
            <p>Find vetted freelancers, post projects, and manage everything in one place</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>For Freelancers</h3>
            <p>Showcase your skills, find projects that match your expertise, and grow your business</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Protected transactions, secure messaging, and fair dispute resolution</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Easy to Use</h3>
            <p>Simple interface designed for efficiency and quick project completion</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
