import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Course not found!</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/courses')}>
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><button className="btn btn-link p-0 text-decoration-none" onClick={() => navigate('/courses')}>Courses</button></li>
              <li className="breadcrumb-item active" aria-current="page">{course.category}</li>
            </ol>
          </nav>

          <h1 className="fw-bold mb-3">{course.title}</h1>
          <p className="lead text-muted mb-4">By {course.instructor}</p>

          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3">Description</h4>
              <p>{course.description}</p>
            </div>
          </div>

          <h4 className="fw-bold mb-3">Course Content</h4>
          <div className="list-group shadow-sm">
            {course.lessons.map((lesson, index) => (
              <div key={index} className="list-group-item d-flex align-items-center py-3">
                <span className="badge bg-primary rounded-pill me-3">{index + 1}</span>
                <span className="fw-medium">{lesson}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card shadow border-0 sticky-top" style={{ top: '20px' }}>
            <div className="card-body p-4 text-center">
              <h3 className="fw-bold mb-4">Enroll Now</h3>
              <p className="text-muted mb-4">
                Get lifetime access to this course and all future updates.
              </p>
              <button className="btn btn-primary btn-lg w-100 mb-3 shadow">
                Enroll Today
              </button>
              <p className="small text-secondary mb-0">
                <i className="bi bi-patch-check-fill text-success me-1"></i>
                Certified Course
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
