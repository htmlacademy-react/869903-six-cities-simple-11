import {reducer} from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: reducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
