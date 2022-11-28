import {OffersList} from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import {Filter} from '../../components/filter/filter';
import {CITY_FILTER} from '../../const';
import { useAppDispatch, useAppSelector} from '../../store';
import {useEffect, useState} from 'react';
import {Sort} from '../../components/sort/sort';
import {OfferType} from '../../types/offer-type';
import {Loading} from '../../components/loading/loading';
import Header from '../../components/header/header';
import {fetchOffersAction} from '../../services/api-actions';

export function Main() : JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);

  const activeCity = useAppSelector((state) => state.city);

  const offersList = useAppSelector((state) => state.offers);

  const cityOffers = offersList.slice().filter((offer: OfferType) => offer.city.name === activeCity);

  const root = document.getElementById('root') as HTMLElement;
  root.style.cssText = 'display: flex; flex-direction: column; overflow-y: hidden';

  if (cityOffers.length !== 0) {
    return (
      <>
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Filter cities={CITY_FILTER}></Filter>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
                <Sort offers={cityOffers}/>
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
      </>
    );
  } else {
    return (
      <Loading />
    );
  }
}
