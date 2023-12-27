import Loader from 'components/Loader/Loader';
import { getReviews } from 'components/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem, ReviewList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const reviewData = await getReviews(movieId);
        const userReviews = reviewData.results;
        setReviews(userReviews);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ReviewList>
            {reviews.map(review => (
              <ReviewItem key={review.id}>
                <h2>Author:{review.author}</h2>
                <p>{review.content}</p>
              </ReviewItem>
            ))}
          </ReviewList>
        </div>
      )}
      {reviews.length === 0 && (
        <p
          style={{
            fontSize: 22,
            color: 'orangered',
            marginLeft: 100,
            marginTop: 25,
          }}
        >
          There are no reviews for this movie
        </p>
      )}
    </div>
  );
};

export default Reviews;