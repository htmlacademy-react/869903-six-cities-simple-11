import {useAppDispatch, useAppSelector} from '../../store';
import {changeCity} from '../../store/action';

type Props = {
  cities: string[];
}
export function Filter(props: Props) {
  const { cities } = props;
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
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