import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../const';
import {Login} from './login';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


const mockStore = configureMockStore();

const store = mockStore({
  user: {authorizationStatus: AuthorizationStatus.NoAuth},
  app: {userEmail: null}
});

describe('Component: Login', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });
});
