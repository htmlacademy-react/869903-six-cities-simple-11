import {Offer} from '../offer/offer';
import {OfferType} from '../../mock/offers';

type OfferProps = {
  offers: OfferType[];
  onSetActiveOffer: (offer: OfferType | undefined) => void;
}

export function OffersList({offers, onSetActiveOffer}: OfferProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer offer={offer} key={offer.id} onSetActiveOffer={onSetActiveOffer} />)}
    </div>
  );
}
