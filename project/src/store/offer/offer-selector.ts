import {Store} from '../../types/store';

export const getCurrentOffer = (state: Store) => state.offer.offer;

export const getReviews = (state: Store) => state.offer.reviews;

export const getLoading = (state: Store) => state.offer.reviewsLoading;

