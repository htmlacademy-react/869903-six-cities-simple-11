import {offers, OfferType} from '../../mock/offers';
import { useParams } from 'react-router-dom';
import {PROPERTY_RATING} from '../../const';
import {Form} from '../../components/form/form';
import {ReviewsList} from '../../components/reviews-list/reviews-list';
import {reviews} from '../../mock/reviews';
import Map from '../../components/map/map';
import {OffersList} from '../../components/offers-list/offers-list';

type NearOffers = {
  offers: OfferType[];
}

export function Room(props: NearOffers) {
  const { id } = useParams();
  const roomData = offers.find((offer) => offer.id === Number(id));
  const offersNear = props.offers.slice(0, 3);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {roomData?.img.map((img) => (
              <div key={img} className="property__image-wrapper">
                <img className="property__image" src={img} alt="studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {roomData?.isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {roomData?.name}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${roomData!.rating! * PROPERTY_RATING}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{roomData?.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {roomData?.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {roomData?.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {roomData?.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">{roomData?.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {roomData?.goods.map((good) => (
                  <li key={good} className="property__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={roomData?.host.avatarUrl} width="74" height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">
                  {roomData?.host.name}
                </span>
                {roomData?.host.isPro && (
                  <span className="property__user-status">
                      Pro
                  </span>
                )}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {roomData?.description}
                </p>
              </div>
            </div>
            <ReviewsList reviews={reviews} />
            <Form />
          </div>
        </div>
        <section className="property__map map">
          <Map city={offers[0].city} points={offersNear}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offers={offersNear} />
        </section>
      </div>
    </main>
  );
}
