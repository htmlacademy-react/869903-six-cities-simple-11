import {Review} from '../review/review';
import {ReviewsType} from '../../mock/reviews';

type ReviewProps = {
  reviews: ReviewsType[];
}

export function ReviewsList({reviews}: ReviewProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>
    </section>
  );
}
