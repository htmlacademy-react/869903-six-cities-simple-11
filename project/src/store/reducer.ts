import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeTypeSorting, getCurrentPoint,
  loadOffers, loadReviews, nearOffers,
  requireAuthorization, reviewsLoading, sendComment,
  setError,
  setUserEmail
} from './action';
import {OffersType, OfferType} from '../types/offer-type';
import {AuthorizationStatus} from '../const';
import { ReviewType} from '../types/reviews';
import {CommentType} from '../types/comments';

type InitialState = {
  city: string;
  offers: OffersType;
  offer: OfferType | null;
  sortingType: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userEmail: string | null;
  nearOffers: OfferType[];
  reviews: ReviewType[];
  reviewsLoading: boolean;
  comments: CommentType | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  offer: null,
  nearOffers: [],
  sortingType: 'popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: null,
  reviews: [],
  reviewsLoading: false,
  comments: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(changeTypeSorting, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getCurrentPoint, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(nearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(reviewsLoading, (state, action) => {
      state.reviewsLoading = action.payload;
    })
    .addCase(sendComment, (state, action) => {
      state.comments = action.payload;
    });
});
