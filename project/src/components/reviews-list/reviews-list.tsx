import {Review} from '../review/review';
import {ReviewType} from '../../types/reviews';
import {useEffect} from 'react';
import {store, useAppSelector} from '../../store';
import {fetchReviewsAction} from '../../services/api-actions';
import {useParams} from 'react-router-dom';
import {Loading} from '../loading/loading';
import {getLoading} from '../../store/offers/offers-selector';
import {getSortedReviews} from '../../store/user/user-selector';

type ReviewProps = {
  reviews: ReviewType[];
}

export function ReviewsList({reviews}: ReviewProps) {
  const params = useParams();
  const isLoading = useAppSelector(getLoading);
  const sortedReviews = useAppSelector(getSortedReviews).slice(0, 10);


  useEffect(() => {
    if(params.id) {
      store.dispatch(fetchReviewsAction(params.id.toString()));
    }
  }, [params.id]);
  if (isLoading) {
    return (<Loading />);
  } else {
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {sortedReviews.map((review) => (
            <Review review={review} key={review.id}/>
          ))}
        </ul>
      </section>
    );
  }
}
