import { useParams} from 'react-router-dom';
import { AuthorizationStatus, PROPERTY_RATING} from '../../const';
import {ReviewsList} from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import {store, useAppSelector} from '../../store';
import {useEffect} from 'react';
import { OfferType} from '../../types/offer-type';
import {ReviewType} from '../../types/reviews';
import {Loading} from '../../components/loading/loading';
import {fetchCurrentOfferAction, fetchNearOffersAction} from '../../services/api-actions/api-actions';
import {useDispatch} from 'react-redux';
import Form from '../../components/form/form';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import {getAuthorizationStatus} from '../../store/user/user-selector';
import {getCurrentOffer, getReviews} from '../../store/offer/offer-selector';
import {getNearOffers} from '../../store/offers/offers-selector';

export function Room(): JSX.Element {
  const {id} = useParams();
  const param = Number(id);
  const dispatch = useDispatch();

  const isAuth: boolean = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const currentOffer = useAppSelector(getCurrentOffer) as OfferType;

  const nearOffers = useAppSelector(getNearOffers);

  const reviews: ReviewType[] = useAppSelector(getReviews);

  const root = document.getElementById('root') as HTMLElement;
  root.style.cssText = '';

  useEffect(() => {
    store.dispatch(fetchCurrentOfferAction(param));
    store.dispatch(fetchNearOffersAction(param.toString()));
  }, [dispatch, param]);

  if(currentOffer) {
    return (
      <>
        <Header/>
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
                <ReviewsList reviews={reviews}/>
                {isAuth ? (
                  <Form hotelId={currentOffer.id}/>
                ) : (
                  <div className="reviews__form">
                  </div>
                )}
              </div>
            </div>
            <section className="property__map map">
              <Map city={currentOffer.city.location} points={[...nearOffers, currentOffer]} selectedPoint={currentOffer}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList offers={nearOffers} onSetActiveOffer={() => void 0}/>
            </section>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <Loading />
    );
  }
}
