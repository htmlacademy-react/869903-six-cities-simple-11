import {createAPI} from '../api';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {Store} from '../../types/store';
import {Action} from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {ApiRoute} from '../../const';
import {checkAuthAction} from './api-actions';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    Store,
    Action<string>,
    ThunkDispatch<Store, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(ApiRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });
});
