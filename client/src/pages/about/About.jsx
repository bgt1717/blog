import React from 'react';
import './about.css';
import greetingsImage from './greetings.jpg';

export default function About() {
  const containerStyle = {
    backgroundImage: `url(${greetingsImage})`,
  };

  return (
    <div style={containerStyle} className="about-container">
      <h2>About Us</h2>
      <p className="about-paragraph">
        Welcome to our platform! Here, you can share your thoughts and ideas by creating posts.
        To get started, simply create an account, and you'll be able to contribute and engage
        with our community. We look forward to hearing from you!
      </p>
    </div>
  );
}
