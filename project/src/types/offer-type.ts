export type LocationCoordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  location: LocationCoordinates;
  name: string;
}

export type OfferType = {
  city: OfferCity;
  id: number;
  images: string[];
  price: number;
  title: string;
  type: string;
  name: string;
  rating: number;
  description: string;
  goods: string[];
  isPremium: boolean;
  maxAdults: number;
  bedrooms :number;
  location: LocationCoordinates;
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type OffersType = OfferType[];
