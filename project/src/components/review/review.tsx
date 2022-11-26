import {PROPERTY_RATING} from '../../const';
import {ReviewType} from '../../types/reviews';
import { format } from 'date-fns';


type ReviewComponentProps = {
  review: ReviewType;
}

export function Review(props: ReviewComponentProps) {
  const {review} = props;

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review.rating * PROPERTY_RATING}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{format(new Date(review.date), 'dd/MM/yyyy')}</time>
      </div>
    </li>
  );
}
