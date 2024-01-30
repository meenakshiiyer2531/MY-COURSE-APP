import React from 'react';
import CourseListing from '../components/CourseListing';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Course Showcase</h1>
      <p>Explore a variety of exciting courses to enhance your knowledge and skills.</p>
      <CourseListing />
    </div>
  );
};

export default HomePage;
