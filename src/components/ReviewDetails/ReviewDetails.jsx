import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import './ReviewDetails';

const ReviewsDetails = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  const reviewItems = reviews.map(({ id, author, content }) => (
    <li key={id} className="review-item">
      <h3 className="review-author">{author}</h3>
      <p className="review-content">{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      <ul className="review-list">
        {reviews.length === 0 ? 'No reviews available' : reviewItems}
      </ul>
    </>
  );
};

export default ReviewsDetails;
