import {OffersList} from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector} from '../../store';
import {useEffect, useState} from 'react';
import {OfferType} from '../../types/offer-type';
import {Loading} from '../../components/loading/loading';
import {fetchOffersAction} from '../../services/api-actions';
import Sort from '../../components/sort/sort';
import Filter from '../../components/filter/filter';

export function Main() : JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);

  const activeCity = useAppSelector((state) => state.offers.city);

  const offersList = useAppSelector((state) => state.offers.offers);

  const cityOffers = offersList.slice().filter((offer: OfferType) => offer.city.name === activeCity);

  const root = document.getElementById('root') as HTMLElement;
  root.style.cssText = 'display: flex; flex-direction: column; overflow-y: hidden';

  if (cityOffers.length !== 0) {
    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Filter />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
              <Sort />
              <OffersList offers={cityOffers} onSetActiveOffer={setActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityOffers[0].city.location} points={cityOffers} selectedPoint={activeOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <Loading />
    );
  }
}
