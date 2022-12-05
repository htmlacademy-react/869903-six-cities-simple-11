import {store} from '../store';
import {clearErrorAction} from './api-actions/api-actions';
import {setError} from '../store/user/action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
