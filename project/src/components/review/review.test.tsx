import {render, screen} from '@testing-library/react';
import { makeFakeReview} from '../../utils';
import {BrowserRouter} from 'react-router-dom';
import {Review} from './review';

const makeReview = makeFakeReview();

describe('Component: NotFound', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <Review review = {makeReview}/>
      </BrowserRouter>
    );

    const headerElement = screen.getByText(`${makeReview.comment}`);

    expect(headerElement).toBeInTheDocument();
  });
});
