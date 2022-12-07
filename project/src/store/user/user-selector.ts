import {AppRoute, AuthorizationStatus} from '../../const';
import {Store} from '../../types/store';
import {Reviews} from '../../types/reviews';
import {createAction, createSelector} from '@reduxjs/toolkit';
import sortReviews from '../../utils';

export const getAuthorizationStatus = (state: Store): AuthorizationStatus => state.user.authorizationStatus;

export const getUserEmail = (state: Store) => state.user.userEmail;

export const getCurrentOfferReviews = (state: Store): Reviews =>
  state.offer.reviews;

export const getSortedReviews = createSelector(
  getCurrentOfferReviews,
  (reviews) => sortReviews(reviews)
);

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
