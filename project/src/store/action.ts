import {createAction} from '@reduxjs/toolkit';
import {OffersType} from '../types/offer-type';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<{
  city:string;
}>('city/change');

export const changeTypeSorting = createAction<string>('offer/changeTypeSorting');

export const loadOffers = createAction<OffersType>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offer/setError');

export const setUserEmail = createAction<string | null>('user/setEmail');


