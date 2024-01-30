import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch courses on component mount
  useEffect(() => {
    axios.get('/api/courses')
      .then(response => setCourses(response.data));
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter courses based on search term
  const filteredCourses = courses.filter(course => {
    return course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Render course list
  return (
    <div>
      <input type="text" placeholder="Search by course or instructor" onChange={handleSearchChange} />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            <a href={`/courses/${course.id}`}>{course.name}</a> - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;
