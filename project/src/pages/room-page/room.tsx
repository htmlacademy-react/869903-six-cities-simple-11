import { useParams } from 'react-router-dom';
import {PROPERTY_RATING} from '../../const';
import {Form} from '../../components/form/form';
import {ReviewsList} from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import {OffersList} from '../../components/offers-list/offers-list';
import {store, useAppSelector} from '../../store';
import {useState} from 'react';
import { OfferType} from '../../types/offer-type';
import {ReviewType} from '../../types/reviews';


export function Room(): JSX.Element {
  const { id } = useParams();

  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);

  const currentOffer: OfferType | undefined = store.getState().offers.find((offer) => offer.id === Number(id));

  const offersList = useAppSelector((state) => state.offers);

  const activeCity = useAppSelector((state) => state.city);

  const cityOffers = offersList.slice().filter((offer: OfferType) => offer.city.name === activeCity);

  const currentReview: ReviewType[] = [];

  if(currentOffer) {
    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.slice(0, 6).map((img) => (
                <div key={img} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer?.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer?.name}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${currentOffer.rating * PROPERTY_RATING}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {currentOffer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{currentOffer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer?.goods.map((good) => (
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
                    <img className="property__avatar user__avatar" src={currentOffer?.host.avatarUrl} width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {currentOffer?.host.name}
                  </span>
                  {currentOffer?.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer?.description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={currentReview}/>
              <Form/>
            </div>
          </div>
          <section className="property__map map">
            <Map city={cityOffers[0].city.location} points={cityOffers} selectedPoint={activeOffer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={cityOffers} onSetActiveOffer={setActiveOffer}/>
          </section>
        </div>
      </main>
    );
  } else {
    return (
      <div className="page"></div>
    );
  }
}
