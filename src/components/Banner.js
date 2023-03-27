import React from 'react';
import { Media } from 'react-bootstrap';

const Banner = () => (
  <Media className="align-items-center">
    <Media.Body>
      <h1>Grow your skills to advance your career path </h1>
      <p>
        build your future with our quality education.
        the best and largest all-in-one online tutoring platform in the world
      </p>
    </Media.Body>
    <img
      width={64}
      height={64}
      className="ms-3"
      src="../Images/Girl.png"
      alt="placeholder"
    />
  </Media>
);

export default Banner;
