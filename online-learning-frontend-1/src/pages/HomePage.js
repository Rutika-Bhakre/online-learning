import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses';
import CourseCard from '../components/CourseCard';

const HomePage = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5 mb-5 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 fw-bold mb-3">Learn New Skills Online</h1>
              <p className="lead text-muted mb-4">
                Access high-quality courses from expert instructors and take your career to the next level.
              </p>
              <Link to="/courses" className="btn btn-primary btn-lg px-5 shadow">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="container mb-5">
        <h2 className="text-center fw-bold mb-4">Featured Courses</h2>
        <div className="row g-4">
          {featuredCourses.map((course) => (
            <div key={course.id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
