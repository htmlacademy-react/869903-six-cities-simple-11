import {OfferType} from '../../mock/offers';
import {OffersList} from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import {Filter} from '../../components/filter/filter';
import {CITY_FILTER} from '../../const';
import {useAppSelector} from '../../store';
import {useState} from 'react';
import {Header} from '../../components/header/header';


export function Main() : JSX.Element {

  const [, setActiveOffer] = useState<OfferType | undefined>(undefined);

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offers={cityOffers} onSetActiveOffer={setActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityOffers[0]?.city} points={cityOffers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
