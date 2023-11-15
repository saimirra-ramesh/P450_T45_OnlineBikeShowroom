import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < rating) {
      return <FontAwesomeIcon icon={solidStar} key={index} className="star" />;
    } else {
      return <FontAwesomeIcon icon={regularStar} key={index} className="star" />;
    }
  });

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;