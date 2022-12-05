import { AuthorizationStatus } from '../../const';
import {userReducer} from './reducer';
import {checkAuthAction, loginAction, logoutAction} from '../../services/api-actions/api-actions';
import {makeComment, makeEmail} from '../../utils';
import {sendComment, setUserEmail} from './action';

describe('Reducer: userReducer', () => {
  const state = {
    authorizationStatus: AuthorizationStatus.Unknown,
    userEmail: null,
    comments: null,
    error: null,
  };

  it('without additional parameters should return initial state', () => {
    expect(userReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        userEmail: null,
        comments: null,
        error: null,
      });
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userReducer(state, { type: checkAuthAction.fulfilled.type, payload: makeEmail }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          userEmail: null,
          comments: null,
          error: null,
        });
    });

    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userReducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          userEmail: null,
          comments: null,
          error: null,
        });
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userReducer(state, { type: loginAction.fulfilled.type}))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          userEmail: null,
          comments: null,
          error: null,
        });
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userReducer(state, { type: loginAction.rejected.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          userEmail: null,
          comments: null,
          error: null,
        });
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userReducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          userEmail: null,
          comments: null,
          error: null,
        });
    });
  });

  describe('userEmail test', () => {
    it('should update the authorization status to "AUTH" and display an email if the setUserEmail action is performed', () => {
      expect(userReducer(state, { type: setUserEmail.type, payload: makeEmail }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          userEmail: makeEmail,
          comments: null,
          error: null,
        });
    });
  });

  describe('comments test', () => {
    it('must send a comment if the action is completed', () => {
      expect(userReducer(state, { type: sendComment.type, payload: makeComment }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          userEmail: null,
          comments: makeComment,
          error: null,
        });
    });
  });
});

