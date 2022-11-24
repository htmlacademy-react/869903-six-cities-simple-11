export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = '/offer',
  Error = '*'
}

export enum ApiRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const PROPERTY_RATING = 20;

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const CITY_FILTER = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum SortTypes {
  Popular= 'popular',
  PriceLowToHigh = 'PriceAscending',
  PriceHighToLow = 'PriceDescending',
  TopRatedFirst = 'RatingDescending'
}

export const sort = [
  {
    type: SortTypes.Popular,
    name: 'Popular',
  },
  {
    type: SortTypes.PriceLowToHigh,
    name: 'Price: low to high',
  },
  {
    type: SortTypes.PriceHighToLow,
    name: 'Price: high to low',
  },
  {
    type: SortTypes.TopRatedFirst,
    name: 'Top rated first',
  }
];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;
