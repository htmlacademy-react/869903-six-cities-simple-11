import {useAppDispatch, useAppSelector} from '../../store';
import {memo} from 'react';
import {CITY_FILTER} from '../../const';
import {changeCity} from '../../store/offers/action';
import {getActiveCity} from '../../store/offers/offers-selector';

function Filter() {

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getActiveCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY_FILTER.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item ${
                  activeCity === city ? 'tabs__item--active' : ''
                }`}
                href="/"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity({ city: city }));
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default memo(Filter);
