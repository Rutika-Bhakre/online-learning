import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm border-0">
      {/* <img src={course.image} alt={course.title} className="card-img-top" /> */}
      <div className="card-body d-flex flex-column">
        <span className="badge bg-primary mb-2 align-self-start">{course.category}</span>
        <h5 className="card-title fw-bold">{course.title}</h5>
        <p className="text-muted small mb-2">By {course.instructor}</p>
        <p className="card-text text-muted flex-grow-1">{course.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="h5 mb-0 text-primary">${course.price}</span>
          <div>
            <Link to={`/courses/${course.id}`} className="btn btn-outline-primary btn-sm me-2">
              View
            </Link>
            <button onClick={() => addToCart(course)} className="btn btn-primary btn-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
