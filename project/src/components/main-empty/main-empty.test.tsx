import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import MainEmpty from './main-empty';

describe('Component: Loading', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <MainEmpty />
      </BrowserRouter>
    );

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText('We could not find any property available at the moment in Dusseldorf')).toBeInTheDocument();
  });
});
