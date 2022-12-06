import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { SortTypes} from '../../const';
import { makeOffersList} from '../../utils';
import OffersList from './offers-list';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureMockStore();

const currentOffers = makeOffersList;

const store = mockStore({
  offers: {city: 'Paris', sortingType: SortTypes.Popular, nearOffers: makeOffersList, offers: currentOffers},
});


describe('Component: OffersList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter >
          <OffersList offers={currentOffers} onSetActiveOffer={mockStore} />
        </BrowserRouter>
      </Provider>
    );

  });
});
