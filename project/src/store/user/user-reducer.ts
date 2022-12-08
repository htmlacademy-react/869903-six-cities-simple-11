import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, sendComment, setError, setUserEmail} from './user-action';
import {CommentType} from '../../types/comments';
import {AuthorizationStatus} from '../../const';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  comments: CommentType | null;
  error: string | null;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  comments: null,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(sendComment, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
