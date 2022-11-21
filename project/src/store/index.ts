import {reducer} from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import {AppDispatch, Store} from '../types/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI} from '../services/api';


export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
