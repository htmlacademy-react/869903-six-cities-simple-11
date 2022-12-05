import {configureStore} from '@reduxjs/toolkit';
import {AppDispatch, Store} from '../types/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {userReducer} from './user/reducer';
import {offersReducer} from './offers/reducer';
import {offerReducer} from './offer/reducer';
import {createAPI} from '../services/api';


export const api = createAPI();

export const store = configureStore({
  reducer: {
    user: userReducer,
    offer: offerReducer,
    offers: offersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
