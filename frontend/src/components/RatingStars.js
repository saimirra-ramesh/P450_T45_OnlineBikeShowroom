import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <FontAwesomeIcon icon={faStar} key={index} className="star" />
  ));
  return <div className="rating-stars">{filledStars}</div>;
};

export default RatingStars;
