import {createAction} from '@reduxjs/toolkit';
import {OffersType} from '../types/offer-type';

export const changeCity = createAction<{
  city:string;
}>('city/change');

export const changeTypeSorting = createAction<string>('offer/changeTypeSorting');

export const loadOffers = createAction<OffersType>('data/loadOffers');

