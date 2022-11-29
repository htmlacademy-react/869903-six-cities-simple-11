import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeTypeSorting,
  loadOffers, nearOffers,
} from './action';
import {OffersType, OfferType} from '../../types/offer-type';

type InitialState = {
  city: string;
  offers: OffersType;
  sortingType: string;
  nearOffers: OfferType[];
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  nearOffers: [],
  sortingType: 'popular',
};

export const offersReducer = createReducer(initialState, (builder) => {
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
    .addCase(nearOffers, (state, action) => {
      state.nearOffers = action.payload;
    });
});
