export type OfferType = {
  id: number;
  img: string[];
  price: number;
  title: string;
  type: string;
  name: string;
  rating?: number;
  description: string;
  goods: string[];
  isPremium: boolean;
  maxAdults: number;
  bedrooms :number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
    host: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
    };
};

export const offers: OfferType[] = [
  {
    img: [
      'img/room.jpg',
      'img/amsterdam.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/amsterdam.jpg',
      'img/studio-01.jpg',
    ],
    goods: [
      'Wi-Fi',
      'Coffee machine'
    ],
    city: {
      location: {
        latitude: 11.4949437,
        longitude: 22.48336229,
        zoom: 10
      },
      name: 'amsterdam'
    },
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 5,
      isPro: false,
      name: 'Dick'
    },
    bedrooms: 2,
    maxAdults: 4,
    isPremium: true,
    description: 'text',
    rating: 4.2,
    name: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    price: 500,
    title: 'Апартаменты',
    type: 'Apartment',
    id: 1,
  },
  {
    img: [
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/amsterdam.jpg',
      'img/room.jpg',
      'img/amsterdam.jpg',
      'img/studio-01.jpg',
    ],
    goods: [
      'Wi-Fi',
      'Cabel TV',
      'Fridge',
      'Heating',
      'Coffee machine'
    ],
    city: {
      location: {
        latitude: 65.476255,
        longitude: 32.985383,
        zoom: 10
      },
      name: 'moscow'
    },
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 10,
      isPro: true,
      name: 'Kevin'
    },
    bedrooms: 3,
    maxAdults: 6,
    isPremium: false,
    description: 'text',
    rating: 4,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin.',
    price: 444,
    title: 'Комната',
    type: 'Room',
    id: 2,
  },
  {
    img: [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/amsterdam.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
    ],
    goods: [
      'Wi-Fi',
      'Cabel TV',
      'Fridge'
    ],
    city: {
      location: {
        latitude: 14.559378,
        longitude: 44.449272,
        zoom: 10
      },
      name: 'sochi'
    },
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 15,
      isPro: false,
      name: 'Maria'
    },
    bedrooms: 2,
    maxAdults: 1,
    isPremium: true,
    description: 'text',
    rating: 3,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare.',
    price: 756,
    title: 'Дом',
    type: 'House',
    id: 3,
  },
  {
    img: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/amsterdam.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
    ],
    goods: [
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen'
    ],
    city: {
      location: {
        latitude: 52.456739,
        longitude: 12.895168,
        zoom: 10
      },
      name: 'london'
    },
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 23,
      isPro: true,
      name: 'Ivan'
    },
    bedrooms: 4,
    maxAdults: 5,
    isPremium: false,
    description: 'text',
    rating: 4.5,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 2900,
    title: 'Отель',
    type: 'Hotel',
    id: 4,
  }];
