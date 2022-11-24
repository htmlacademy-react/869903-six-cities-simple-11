import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeTypeSorting, loadOffers, requireAuthorization, setError, setUserEmail} from './action';
import {OffersType} from '../types/offer-type';
import {AuthorizationStatus} from '../const';

type InitialState = {
  city: string;
  offers: OffersType;
  sortingType: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userEmail: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sortingType: 'popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: null,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});
