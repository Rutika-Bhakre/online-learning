import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Master New Skills with EduPortal</h1>
          <p>Access high-quality courses from expert instructors anytime, anywhere.</p>
          <Link to="/courses" className="explore-btn">
            Explore Courses
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Flexible Learning</h2>
          <p>Learn at your own pace with lifetime access to courses.</p>
        </div>
        <div className="feature">
          <h2>Expert Instructors</h2>
          <p>Courses taught by industry professionals and experts.</p>
        </div>
        <div className="feature">
          <h2>Affordable Prices</h2>
          <p>High-quality education that won't break the bank.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
