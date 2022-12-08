import {Reviews, ReviewType} from './types/reviews';

const sortDateDecriment = (a: ReviewType, b: ReviewType): number => {
  const reviewDate1 = +new Date(a.date);
  const reviewDate2 = +new Date(b.date);

  return Math.sign(reviewDate2 - reviewDate1);
};

const sortReviews = (reviews: Reviews): Reviews => {
  const sortedReviews = [...reviews];

  return sortedReviews.sort(sortDateDecriment);
};

export default sortReviews;
