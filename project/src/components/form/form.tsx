import {FormEvent, useEffect, useState} from 'react';
import {ChangeEvent} from 'react';
import {useAppDispatch} from '../../store';
import { sendNewComment} from '../../services/api-actions';

type CommentProps = {
  hotelId: number;
}

export default function Form({hotelId}: CommentProps) {
  const content = {comment: '', rating: 0};

  const [formData, setFormData] = useState(content);

  const [disabledButton, setDisabledButton] = useState(true);

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    if (formData.comment.length >= 5 && formData.comment.length <= 300 && formData.rating !== 0) {
      evt.preventDefault();
      dispatch(sendNewComment({
        comment: formData.comment,
        rating: formData.rating,
        hotelId: hotelId,
      }));
      setFormData(content);
      setDisabledButton(true);
      document.getElementsByName('rating').forEach((el) => {
        el.setAttribute('checked', 'false');
        el.removeAttribute('checked');
      });
    }
  };


  useEffect(() => {
    if (formData.comment.length >= 5 && formData.comment.length <= 300 && formData.rating !== 0) {
      setDisabledButton(false);
    }
    else {
      setDisabledButton(true);
    }
  }, [formData.comment, formData.rating]);


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" onChange={fieldChangeHandle}
          checked={formData.rating === 5}
          type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars"
          type="radio" onChange={fieldChangeHandle}
          checked={formData.rating === 4}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars"
          type="radio" onChange={fieldChangeHandle}
          checked={formData.rating === 3}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars"
          type="radio" onChange={fieldChangeHandle}
          checked={formData.rating === 2}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star"
          type="radio" onChange={fieldChangeHandle}
          checked={formData.rating === 1}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="comment" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandle}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabledButton}>Submit</button>
      </div>
    </form>
  );
}
