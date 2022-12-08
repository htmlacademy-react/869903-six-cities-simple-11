import {createReducer} from '@reduxjs/toolkit';
import {OfferType} from '../../types/offer-type';
import {ReviewType} from '../../types/reviews';
import {getCurrentPoint, loadReviews, reviewsLoading} from './offer-action';

type InitialState = {
  offer: OfferType | null;
  reviews: ReviewType[];
  reviewsLoading: boolean;
}

const initialState: InitialState = {
  offer: null,
  reviews: [],
  reviewsLoading: false,
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCurrentPoint, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(reviewsLoading, (state, action) => {
      state.reviewsLoading = action.payload;
    });
});
