import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';
import thunk from 'redux-thunk';
import {makeComment, makeEmail, makeFakeAppProcessData, makeOffer, makeOffersList, makeReviews} from '../../utils';
import React from 'react';
import {nearOffers} from "../../store/offers/action";

const fakeComment = makeComment();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const fakeAppData = makeFakeAppProcessData();

const store = mockStore({
  user: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userEmail: makeEmail,
    comments: makeReviews,
    error: null,
  },
  offers:{
    city: 'Paris',
    offers: makeOffersList,
    nearOffers: makeOffersList,
    sortingType: 'popular',
  },
  offer:{
    offer: makeOffer(),
    reviews: makeReviews,
    reviewsLoading: false,
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(`${makeOffersList.length} places to stay in Paris`)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render "PropertyPage" when user navigate to "/offer/:id"', () => {
    history.push(`/offer/${makeComment().hotelId}`);

    render(fakeApp);


    expect(screen.getByText(`${makeOffer().title}`)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push(AppRoute.Error);

    render(fakeApp);

    const headerElement = screen.getByText('No places to stay available');
    const smallElement = screen.getByText('We could not find any property available at the moment in Dusseldorf');

    expect(headerElement).toBeInTheDocument();
    expect(smallElement).toBeInTheDocument();
  });
});


