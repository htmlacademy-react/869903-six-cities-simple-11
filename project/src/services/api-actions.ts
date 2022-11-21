import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { OffersType } from '../types/offer-type';
import {AppDispatch, Store} from '../types/store';
import {loadOffers} from '../store/action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {

    const {data} = await api.get<OffersType>('/hotels');

    dispatch(loadOffers(data));
  }
);

