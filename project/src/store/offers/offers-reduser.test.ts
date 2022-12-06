import {offersReducer} from './reducer';
import {makeOffersList} from '../../utils';
import {loadOffers, nearOffers} from './action';

describe('Reducer: gameProcess', () => {
  const state = {
    city: 'Paris',
    offers: [],
    nearOffers: [],
    sortingType: 'popular',
  };
  it('without additional parameters should return initial state', () => {
    expect(offersReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        city: 'Paris',
        offers: [],
        nearOffers: [],
        sortingType: 'popular',
      });
  });

  it('should return the list of cities if the loadOffers action is performed', () => {
    expect(offersReducer(state, {type: loadOffers.type, payload: makeOffersList}))
      .toEqual({
        city: 'Paris',
        offers: makeOffersList,
        nearOffers: [],
        sortingType: 'popular',
      });
  });

  it('should return the list of cities if the nearOffers action is performed', () => {
    expect(offersReducer(state, {type: nearOffers.type, payload: makeOffersList}))
      .toEqual({
        city: 'Paris',
        offers: [],
        nearOffers: makeOffersList,
        sortingType: 'popular',
      });
  });

});
