import React, { useState } from 'react';
import courses from '../data/courses';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold m-0">Explore Our Courses</h2>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search for courses or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <CourseCard course={course} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h5 className="text-muted">No courses found matching your search.</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
