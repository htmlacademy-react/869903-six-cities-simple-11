import {offerReducer} from './reducer';
import {getCurrentPoint, loadReviews, reviewsLoading} from './action';
import {makeIsLoading, makeOffer, makeReviews} from '../../utils';

describe('Reducer: gameProcess', () => {
  const state = {
    offer: null,
    reviews: [],
    reviewsLoading: false,
  };
  it('without additional parameters should return initial state', () => {
    expect(offerReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offer: null,
        reviews: [],
        reviewsLoading: false,
      });
  });

  it('should return the selected offer', () => {
    expect(offerReducer(state, {type: getCurrentPoint.type, payload:  makeOffer()}))
      .toEqual({
        offer: makeOffer(),
        reviews: [],
        reviewsLoading: false,
      });
  });

  it('Has to return reviews', () => {
    expect(offerReducer(state, {type: loadReviews.type, payload:  makeReviews}))
      .toEqual({
        offer: null,
        reviews: makeReviews,
        reviewsLoading: false,
      });
  });

  it('is loading', () => {
    expect(offerReducer(state, {type: reviewsLoading.type, payload: makeIsLoading}))
      .toEqual({
        offer: null,
        reviews: [],
        reviewsLoading: true,
      });
  });
});
