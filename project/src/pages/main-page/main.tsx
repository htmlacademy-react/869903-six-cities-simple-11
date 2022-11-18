import {OfferType} from '../../mock/offers';
import {OffersList} from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import {Filter} from '../../components/filter/filter';
import {CITY_FILTER} from '../../const';
import {useAppSelector} from '../../store';
import {useState} from 'react';
import {Header} from '../../components/header/header';
import {Sort} from '../../components/sort/sort';


export function Main() : JSX.Element {

  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);

  const offersList = useAppSelector((state) => state.list);

  const activeCity = useAppSelector((state) => state.city);

  const cityOffers = offersList.slice().filter((offer: OfferType) => offer.city.name === activeCity);


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
}
