import {reducer} from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import {AppDispatch, Store} from '../types/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({reducer});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
