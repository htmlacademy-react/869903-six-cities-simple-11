import {Offer} from '../offer/offer';
import {OfferType} from '../../mock/offers';
import {useAppSelector} from '../../store';
import {SortTypes} from '../../const';

type OfferProps = {
  offers: OfferType[];
  onSetActiveOffer: (offer: OfferType | undefined) => void;
}

export function OffersList({offers, onSetActiveOffer}: OfferProps) {
  const typeSorting = useAppSelector((state) => state.sortingType);

  switch (typeSorting) {
    case SortTypes.PriceHighToLow:
      offers = [...offers].sort((a, b) => a.price - b.price);
      break;
    case SortTypes.PriceLowToHigh:
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

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer offer={offer} key={offer.id} onSetActiveOffer={onSetActiveOffer} />)}
    </div>
  );
}
