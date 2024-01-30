import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseDetails = ({ match }) => {
  const courseId = match.params.id; // Get course ID from URL parameter
  const [course, setCourse] = useState({});

  // Fetch course details on component mount
  useEffect(() => {
    axios.get(`/api/courses/${courseId}`)
      .then(response => setCourse(response.data));
  }, [courseId]);

  // Display course information if available
  if (course.id) {
    return (
      <div>
        <h1>{course.name}</h1>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>Enrollment Status: {course.enrollmentStatus}</p>
        <p>Duration: {course.duration}</p>
        <p>Schedule: {course.schedule}</p>
        <p>Location: {course.location}</p>
        <p>Prerequisites: {course.prerequisites.join(', ')}</p>
        <div dangerouslySetInnerHTML={{ __html: course.syllabus }} />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default CourseDetails;
