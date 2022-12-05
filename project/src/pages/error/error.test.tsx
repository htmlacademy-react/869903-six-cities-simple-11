import {render, screen} from '@testing-library/react';
import {Error} from './error';
import {BrowserRouter} from 'react-router-dom';

describe('Component: NotFound', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter >
        <Error/>
      </BrowserRouter>,
    );

    const headerElement = screen.getByText('404.');
    const smallElement = screen.getByText('Page not found');
    const linkElement = screen.getByText('Go to main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(smallElement).toBeInTheDocument();
  });
});
