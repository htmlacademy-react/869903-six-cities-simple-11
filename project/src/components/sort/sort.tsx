import {useAppDispatch, useAppSelector} from '../../store';
import {memo, useState} from 'react';
import {sort} from '../../const';
import {changeTypeSorting} from '../../store/offers/action';

function Sort() {
  const dispatch = useAppDispatch();
  const currentTypeSorting = useAppSelector((state) => state.offers.sortingType);
  const [openSorting, setOpenSorting] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => openSorting ? setOpenSorting(false) : setOpenSorting(true)}>
        {currentTypeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openSorting ? 'places__options--opened' : ''}`}>
        {
          sort.map((item) => (
            <li
              key={item.type}
              className={`places__option ${currentTypeSorting === item.type ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                setOpenSorting(!openSorting);
                dispatch(changeTypeSorting(item.type));
              }}
            >
              {item.name}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
export default memo(Sort);
