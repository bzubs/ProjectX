import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./LandingPage.css"; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="logo fade-in">ProjectX</h1>
        <nav className="nav">
          {/* Navbar links */}
          <div className="nav-links">
            <Link to="#about" className="nav-link slide-in">About</Link>
            <Link to="#categories" className="nav-link slide-in">Categories</Link>
            <Link to="#testimonials" className="nav-link slide-in">Testimonials</Link>
          </div>

          {/* Navbar buttons (Trending, Login, and Register) */}
          <div className="nav-buttons">
            <Link to="/trending">
              <button className="trending-btn">Trending</button>
            </Link>
            <Link to="/login">
              <button className="nav-btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="nav-btn">Register</button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main">
        <h2 className="main-title bounce">Write stories that matter.</h2>
        <p className="main-subtitle color-change">
          Whether it's education, sports, movies, or music, we bring together
          the best stories for you. Start your journey with ProjectX today!
        </p>

        {/* Get Started Button linking to Login */}
        <Link to="/login">
          <button className="main-button fade-in">Get Started</button>
        </Link>
      </main>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h3 className="categories-title fade-in">Popular Categories</h3>
        <div className="categories-grid">
          <div className="category-card fade-in">
            <div className="category-icon">📘</div>
            <h4 className="category-name">Education</h4>
          </div>
          <div className="category-card fade-in">
            <div className="category-icon">⚽</div>
            <h4 className="category-name">Sports</h4>
          </div>
          <div className="category-card fade-in">
            <div className="category-icon">🎬</div>
            <h4 className="category-name">Movies</h4>
          </div>
          <div className="category-card fade-in">
            <div className="category-icon">🎵</div>
            <h4 className="category-name">Music</h4>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h3 className="testimonials-title fade-in">What Our Users Say</h3>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "ProjectX has completely transformed the way I share and discover
              content. It's a must-have platform!"
            </p>
            <h5 className="testimonial-author">- Alex Johnson</h5>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "I love how easy it is to find stories on my favorite topics like
              movies and music!"
            </p>
            <h5 className="testimonial-author">- Emma Davis</h5>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h3 className="newsletter-title fade-in">Stay Updated</h3>
        <p>Subscribe to our newsletter to receive the latest stories.</p>
        <div className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email"
          />
          <button className="newsletter-button fade-in">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 ProjectX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
