import {Offer} from '../offer/offer';
import {store, useAppSelector} from '../../store';
import {SortTypes} from '../../const';
import {OfferType} from '../../types/offer-type';
import {useEffect} from 'react';
import {fetchNearOffersAction} from '../../services/api-actions';
import {Loading} from '../loading/loading';
import {useParams} from 'react-router-dom';

type OfferProps = {
  offers: OfferType[];
  onSetActiveOffer: (offer: OfferType | undefined) => void;
}

export function OffersList({offers, onSetActiveOffer}: OfferProps) {
  const typeSorting = useAppSelector((state) => state.sortingType);
  const params = useParams();
  const isLoading = useAppSelector((state) => state.reviewsLoading);

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
  useEffect(() => {
    if(params.id) {
      store.dispatch(fetchNearOffersAction(params.id.toString()));
    }
  }, [params.id]);
  if (isLoading) {
    return (<Loading />);
  } else {
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <Offer offer={offer} key={offer.id} onSetActiveOffer={onSetActiveOffer}/>)}
      </div>
    );
  }
}
