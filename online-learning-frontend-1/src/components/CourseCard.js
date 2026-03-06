import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body">
        <span className="badge bg-info text-dark mb-2">{course.category}</span>
        <h5 className="card-title fw-bold">{course.title}</h5>
        <p className="card-text text-muted mb-1">Instructor: {course.instructor}</p>
        <p className="card-text small text-secondary">{course.description.substring(0, 80)}...</p>
      </div>
      <div className="card-footer bg-white border-0 pb-3">
        <Link to={`/courses/${course.id}`} className="btn btn-outline-primary w-100">
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
