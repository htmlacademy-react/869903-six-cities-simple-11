import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeTypeSorting, loadOffers} from './action';
import {OffersType} from '../types/offer-type';

const initialState = {
  city: 'Paris',
  offers: [] as OffersType,
  sortingType: 'popular',
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
    });
});
