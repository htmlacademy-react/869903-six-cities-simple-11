import {createReducer} from '@reduxjs/toolkit';
import {sendComment, setError, setUserEmail} from './action';
import {CommentType} from '../../types/comments';
import {AuthorizationStatus} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../../services/api-actions/api-actions';

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
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUserEmail, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userEmail = action.payload;
    })
    .addCase(sendComment, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.comments = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
