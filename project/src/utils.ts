import { OfferCity, OfferType} from './types/offer-type';
import {company, datatype, internet, random} from 'faker';
import {ReviewType} from './types/reviews';
import {CommentSendType} from './types/comments';

const makeCity = (): OfferCity => ({
  name: 'city',
  location: {
    latitude: -62.559,
    longitude: 83.8007,
    zoom: 10,
  }
});

export const makeOffer = (): OfferType => ({
  city: makeCity(),
  id: 2,
  images: company.suffixes(),
  price: 5000,
  title: 'Brussels',
  type: 'hotel',
  name: 'santa',
  rating: 4,
  description: 'lorem',
  goods: company.suffixes(),
  isPremium: true,
  maxAdults: 5,
  bedrooms : 5,
  location: {
    latitude: -62.559,
    longitude: 83.8007,
    zoom: 10
  },
  host: {
    avatarUrl: 'http://trisha.name',
    id: 223,
    isPro: false,
    name: 'Customer Brand Officer',
  },
});

export const makeFakeReview = ():ReviewType => ({
  id: datatype.number(),
  comment: random.word(),
  date: datatype.number().toString(),
  rating: datatype.number(),
  user: {
    avatarUrl: internet.url(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: random.word(),
  }
});

export const makeReview = (): ReviewType => ({
  id: 3,
  user: {
    id: 4,
    isPro: true,
    name: 'rita',
    avatarUrl: 'http://trisha.name',
  },
  rating: 4,
  comment: 'Customer Brand Officer',
  date: '23.06.1996',
});

export const makeReviews = new Array(10).map(() => makeReview());

export const makeOffersList = new Array(10).fill(null).map(() => makeOffer());

export const makeIsLoading = true;

export const makeEmail = 'user@user.ru';

export const makePassword = '1234';

export const makeComment = (): CommentSendType => ({
  hotelId: 24,
  comment: 'lorem lorem',
  rating: 5,
});

export const makeFakeAppProcessData = () => ({
  city: random.word(),
  focusCardId: datatype.number(),
  sortType: random.word(),
});


export type makeAppProcessData = () => ({
  offers: OfferType[];
  onSetActiveOffer: (offers: OfferType | undefined) => void ;
});
