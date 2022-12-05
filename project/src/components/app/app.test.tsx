import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';
import thunk from 'redux-thunk';
import {makeComment, makeEmail, makeFakeAppProcessData, makeOffer, makeOffersList, makeReviews} from '../../utils';

const fakeComment = makeComment();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const fakeAppData = makeFakeAppProcessData();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, email: makeEmail},
  OFFERS:{ offersList: makeOffersList, loaders: {'offers-load': false}},
  OFFER:{offer: makeOffer(), loaders: {'offer-load': false}, isOfferLoadedError:false},
  REVIEWS:{commentsList: makeReviews, loaders: {'comments-load': false}},
  NEARBY_OFFERS:{ nearbyOffers: makeOffersList, loaders: {'nearbyOffers-load': false}},
  APP:{city: fakeAppData.city, focusCardId: fakeAppData.focusCardId,sortType: fakeAppData.sortType}
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(new RegExp('places to stay in', 'i'))).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render "PropertyPage" when user navigate to "/offer/:id"', () => {
    history.push(`/offer/${fakeComment.hotelId}`);

    render(fakeApp);


    expect(screen.getByText(`${makeOffer().title}`)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    const headerElement = screen.getByText('404.');
    const smallElement = screen.getByText('Page not found');
    const linkElement = screen.getByText('Go to main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(smallElement).toBeInTheDocument();
  });
});


