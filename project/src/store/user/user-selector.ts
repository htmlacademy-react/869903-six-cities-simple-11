import {AuthorizationStatus} from '../../const';
import {Store} from '../../types/store';

export const getAuthorizationStatus = (state: Store): AuthorizationStatus => state.user.authorizationStatus;

export const getUserEmail = (state: Store) => state.user.userEmail;
