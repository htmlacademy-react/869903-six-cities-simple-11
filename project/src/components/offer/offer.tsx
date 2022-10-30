import {OfferType} from '../../mock/offers';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type OfferComponentProps = {
  offer: OfferType;
  onPlaceCardMouseOver: (id: number) => void;

}

export function Offer(props: OfferComponentProps) {
  const { offer } = props;
  const { id, img, price, title, type } = offer;
  const { onPlaceCardMouseOver } = props;

  return (
    <article className="cities__card place-card" id={id.toString()} onMouseOver={() => onPlaceCardMouseOver(id)}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${offer.id}`}>
          <img className="place-card__image" src={img[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
