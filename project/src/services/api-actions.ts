import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {OffersType, OfferType} from '../types/offer-type';
import {AppDispatch, Store} from '../types/store';

import {ApiRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken} from './token';
import {UserData} from '../types/user-data';
import {store} from '../store';
import { ReviewType} from '../types/reviews';
import {CommentSendType, CommentType} from '../types/comments';
import {loadOffers, nearOffers} from '../store/offers/offers-action';
import {getCurrentPoint, loadReviews} from '../store/offer/offer-action';
import {requireAuthorization, setError, setUserEmail} from '../store/user/user-action';

export const clearErrorAction = createAsyncThunk(
  'offer/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {

    const {data} = await api.get<OffersType>(ApiRoute.Offers);

    dispatch(loadOffers(data));
  }
);

export const fetchCurrentOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadOffers',
  async (hotelId, {dispatch, extra: api}) => {

    const {data} = await api.get<OfferType>(`${ApiRoute.Offers}/${hotelId}`);

    dispatch(getCurrentPoint(data));
  }
);

export const fetchNearOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadNearOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferType[]>(`${ApiRoute.Offers}/${id}/nearby`);

      dispatch(nearOffers(data));
    } catch {
      dispatch(nearOffers([] as OfferType[]));
    }
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const response = await api.get<ReviewType[]>(`${ApiRoute.Reviews}/${id}`);
    dispatch(loadReviews(response.data));
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(ApiRoute.Login);
      dispatch(setUserEmail(data.email));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserEmail(email));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const sendNewComment = createAsyncThunk<void, CommentSendType, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({comment, rating, hotelId}, {dispatch, extra: api}) => {

    await api.post<CommentType>(`${ApiRoute.Reviews}/${hotelId}`, {comment, rating});
    dispatch(fetchReviewsAction(hotelId.toString()));
  }
);
