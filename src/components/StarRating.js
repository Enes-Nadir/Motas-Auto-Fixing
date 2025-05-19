import React, { useState } from 'react';

const StarRating = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleMouseEnter = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStar = (index) => {
    const fillValue = hoverRating || rating;
    if (fillValue >= index + 1) {
      return 'fas fa-star';
    } else if (fillValue >= index + 0.5) {
      return 'fas fa-star-half-alt';
    } else {
      return 'far fa-star';
    }
  };

  return (
    <div className="star-rating">
      {[0, 1, 2, 3, 4].map((index) => (
        <span
          key={index}
          className={`star ${renderStar(index)}`}
          onClick={() => handleStarClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer', fontSize: '30px' }}
        ></span>
      ))}
    </div>
  );
};

export default StarRating;
