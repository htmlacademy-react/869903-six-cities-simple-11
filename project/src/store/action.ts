import {createAction} from '@reduxjs/toolkit';
import {OffersType, OfferType} from '../types/offer-type';
import {AuthorizationStatus} from '../const';
import { ReviewType} from '../types/reviews';
import {CommentType} from '../types/comments';

export const changeCity = createAction<{
  city:string;
}>('city/change');

export const changeTypeSorting = createAction<string>('offer/changeTypeSorting');

export const loadOffers = createAction<OffersType>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offer/setError');

export const setUserEmail = createAction<string | null>('user/setEmail');

export const nearOffers = createAction<OfferType[]>('data/nearOffers');

export const loadReviews = createAction<ReviewType[]>('data/loadReviews');

export const reviewsLoading = createAction<boolean>('data/reviewsLoading');

export const sendComment = createAction<CommentType>('data/sendComment');


