import {render, screen} from '@testing-library/react';
import {makeOffer, makeReviews} from '../../utils';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Offer from './offer';
import {Provider} from 'react-redux';


const offer = makeOffer();

const mockStore = configureMockStore();

const store = mockStore({
  offer: {reviews: makeReviews, offer: offer, reviewsLoading: false},
});

describe('Component: Offer', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter >
          <Offer offer={offer} onSetActiveOffer={mockStore}/>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(offer.type)).toBeInTheDocument();
  });
});
