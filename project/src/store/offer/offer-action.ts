import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../../types/offer-type';
import {ReviewType} from '../../types/reviews';

export const getCurrentPoint = createAction<OfferType>('offer/getCurrentPoint');

export const loadReviews = createAction<ReviewType[]>('data/loadReviews');

export const reviewsLoading = createAction<boolean>('data/reviewsLoading');
