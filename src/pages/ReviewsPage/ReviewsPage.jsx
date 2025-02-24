import '../ReviewsPage/reviews.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../../constants/globalConstants';

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  <div className="reviews">
    <h2>Reviews</h2>
    <div className="reviews-list">
      {reviews.map((review) => (
        <div key={review.id} className="reviews-card">
          <h3>{review.name}</h3>
          <h5>{review.email}</h5>
          <p>{review.message}</p>
        </div>
      ))}
    </div>
  </div>;
};
