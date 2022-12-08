import { Fragment, useState} from 'react';
import {useAppDispatch} from '../../store';
import { sendNewComment} from '../../services/api-actions';
import {ReviewType} from '../../types/reviews';
import {Ratings} from '../../types/comments';
import {DEFAULT_RATING, MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT} from '../../const';

type CommentProps = {
  hotelId: number;
}

export default function Form({hotelId}: CommentProps) {
   type NewReview = Pick<ReviewType, 'rating' | 'comment'>;

   const [review, setReview] = useState<NewReview>({
     comment: '',
     rating: DEFAULT_RATING
   });

   const [isSendReview, setSendReview] = useState<boolean>(false);

   const dispatch = useAppDispatch();

   const handleSubmit = async () => {
     setSendReview(true);
     await dispatch(sendNewComment({ hotelId: hotelId, comment: review.comment, rating: review.rating }));
     setSendReview(false);
     setReview({ comment: '', rating: DEFAULT_RATING });
   };

   return (
     <form
       className="reviews__form form"
       method="post"
       action=""
       onSubmit={(evt) => {
         evt.preventDefault();
         handleSubmit();
       }}
     >
       <label className="reviews__label form__label" htmlFor="review">Your review</label>
       <div className="reviews__rating-form form__rating">
         {
           Ratings.map(({ value, title }) => {
             const id = `${value}-stars`;
             return (
               <Fragment key={id}>
                 <input
                   className="form__rating-input visually-hidden"
                   type="radio"
                   name="rating"
                   id={id}
                   value={value}
                   onChange={(evt) => setReview({...review, rating: +evt.target.value})}
                   checked={review.rating === value}
                 />
                 <label
                   className="reviews__rating-label form__rating-label"
                   htmlFor={id}
                   title={title}
                 >
                   <svg className="form__star-image" width="37" height="33">
                     <use xlinkHref="#icon-star"></use>
                   </svg>
                 </label>
               </Fragment>
             );
           })
         }
       </div>
       <textarea
         className="reviews__textarea form__textarea"
         name="review"
         id="review"
         placeholder="Tell how was your stay, what you like and what can be improved"
         value={review.comment}
         onChange={(evt) => setReview({...review, comment: evt.target.value})}
       />
       <div className="reviews__button-wrapper">
         <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>{' '}
          and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
         </p>
         <button
           className="reviews__submit form__submit button"
           type="submit"
           disabled={
             review.rating === DEFAULT_RATING ||
            review.comment.length < MIN_LENGTH_COMMENT ||
            review.comment.length >= MAX_LENGTH_COMMENT ||
            isSendReview
           }
         >
          Submit
         </button>
       </div>
     </form>
   );
}
