import {offers} from '../mock/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeTypeSorting} from './action';

const initialState = {
  city: 'Paris',
  list: offers,
  typeSorting: 'popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(changeTypeSorting, (state, action) => {
      state.typeSorting = action.payload;
    });
});
