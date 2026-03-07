import React from 'react';
import courses from '../data/courses';
import CourseCard from '../components/CourseCard';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-page">
      <h1>All Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
