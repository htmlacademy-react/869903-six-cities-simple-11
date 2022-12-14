import {AppRoute, PROPERTY_RATING} from '../../const';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offer-type';
import {memo} from 'react';

type OfferComponentProps = {
  offer: OfferType;
  onSetActiveOffer: (offer: OfferType | undefined) => void;
}

function Offer({offer, onSetActiveOffer}: OfferComponentProps) {

  return (
    <article className="cities__card place-card" id={offer.id.toString()}
      onMouseOver={() => onSetActiveOffer(offer)}
      onMouseLeave={ () => onSetActiveOffer(undefined) }
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${offer.id}`} >
          <img className="place-card__image" src={offer.images[1]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * PROPERTY_RATING}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default memo(Offer);
