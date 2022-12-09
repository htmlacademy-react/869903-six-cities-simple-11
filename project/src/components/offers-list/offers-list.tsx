import { useAppSelector} from '../../store';
import {SortTypes} from '../../const';
import {OfferType} from '../../types/offer-type';
import {Loading} from '../loading/loading';
import {getLoading, getTypeSorting} from '../../store/offers/offers-selector';
import {useCallback} from 'react';
import Offer from '../offer/offer';

type OfferProps = {
  offers: OfferType[];
  onSetActiveOffer: (offer: OfferType | undefined) => void;
}

export default function OffersList({offers, onSetActiveOffer}: OfferProps) {

  const typeSorting = useAppSelector(getTypeSorting);
  const isLoading = useAppSelector(getLoading);

  const handleClick = useCallback((currentOffer: OfferType | undefined) => onSetActiveOffer(currentOffer), []);


  switch (typeSorting) {
    case SortTypes.PriceLowToHigh:
      offers = [...offers].sort((a, b) => a.price - b.price);
      break;
    case SortTypes.PriceHighToLow:
      offers = [...offers].sort((a, b) => a.price - b.price).reverse();
      break;
    case SortTypes.TopRatedFirst:
      offers = [...offers].sort((a, b) => a.rating - b.rating).reverse();
      break;
    case SortTypes.Popular:
      break;
    default:
      break;
  }

  if (isLoading) {
    return (<Loading />);
  } else {
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <Offer offer={offer} key={offer.id} onSetActiveOffer={handleClick}/>)}
      </div>
    );
  }
}

