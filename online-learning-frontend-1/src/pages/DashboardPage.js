import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../data/courses';

const DashboardPage = () => {
  const navigate = useNavigate();
  const enrolledCourses = courses.filter((c) => c.enrolled);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="fw-bold mb-3">Welcome Back, Learner!</h2>
          <p className="lead text-muted">Track your progress and continue learning where you left off.</p>
        </div>
      </div>

      <div className="row g-4">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <div key={course.id} className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h4 className="fw-bold mb-2">{course.title}</h4>
                      <p className="text-muted mb-3">Instructor: {course.instructor}</p>
                      
                      <div className="d-flex align-items-center mb-2">
                        <span className="fw-medium me-3">Progress</span>
                        <div className="progress flex-grow-1" style={{ height: '10px' }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${course.progress}%` }}
                            aria-valuenow={course.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="ms-3 fw-bold">{course.progress}%</span>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                      <button className="btn btn-primary px-4 shadow">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h5 className="text-muted mb-4">You are not enrolled in any courses yet.</h5>
            <button onClick={() => navigate('/courses')} className="btn btn-outline-primary px-4">Browse Courses</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
