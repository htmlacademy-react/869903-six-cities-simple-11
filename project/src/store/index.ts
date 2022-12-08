import {configureStore} from '@reduxjs/toolkit';
import {AppDispatch, Store} from '../types/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI} from '../services/api';
import {userReducer} from './user/user-reducer';
import {offersReducer} from './offers/offers-reducer';
import {offerReducer} from './offer/offer-reducer';


export const api = createAPI();

export const store = configureStore({
  reducer: {
    user: userReducer,
    offers: offersReducer,
    offer: offerReducer,
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
