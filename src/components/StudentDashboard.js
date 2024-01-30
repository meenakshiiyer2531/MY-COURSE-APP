import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Fetch enrolled courses on component mount
  useEffect(() => {
    // Replace with your actual API endpoint and authentication logic
    axios.get('/api/enrolled-courses', { /* authentication headers */ })
      .then(response => setEnrolledCourses(response.data));
  }, []);

  // Render enrolled courses
  return (
    <div>
      <h1>Your Enrolled Courses</h1>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <p>Progress: {course.progress}%</p>
            <button onClick={() => handleMarkCompleted(course.id)}>Mark Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Function to handle marking a course as completed (not implemented yet)
const handleMarkCompleted = (courseId) => {
  // Dispatch a Redux action or make an API call to mark the course as completed
};

export default StudentDashboard;
