import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Fetches/fetch';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const reviewsData = await fetchReviews(movieId);
      setReviews(reviewsData);
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.content}</p>
                <p>Author: {review.author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;