import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../const';
import Header from './header';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureMockStore();

const store = mockStore({
  user: {authorizationStatus: AuthorizationStatus.Unknown, userEmail: null},
});

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
