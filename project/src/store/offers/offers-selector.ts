import {Store} from '../../types/store';

export const getTypeSorting = (state: Store) => state.offers.sortingType;

export const getActiveCity = (state: Store) => state.offers.city;

export const getOffersList = (state: Store) => state.offers.offers;

export const getNearOffers = (state: Store) => state.offers.nearOffers;
