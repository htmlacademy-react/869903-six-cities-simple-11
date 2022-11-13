import {Offer} from '../offer/offer';
import {OfferType} from '../../mock/offers';
import {useState} from 'react';

type OfferProps = {
  offers: OfferType[];
}

export function OffersList({offers}: OfferProps) {
  const [ , setActiveCard] = useState<number>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer offer={offer} key={offer.id} onSetActiveOffer={() => {setActiveCard(offer.id);}}/>)}
    </div>
  );
}
