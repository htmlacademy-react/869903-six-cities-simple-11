import {offers} from '../mock/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';

const initialState = {
  city: 'Paris',
  list: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    });
});
