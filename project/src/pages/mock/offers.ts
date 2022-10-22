export type OfferType = {
  id: number;
  img: string;
  price: number;
  title: string;
  type: string;
};

export const offers: OfferType[] = [{
  img: 'img/apartment-01.jpg',
  price: 500,
  title: 'Апартаменты',
  type: 'Apartment',
  id: 1,
},
{
  img: 'img/room.jpg',
  price: 444,
  title: 'Комната',
  type: 'Room',
  id: 2,
},
{
  img: 'img/apartment-03.jpg',
  price: 756,
  title: 'Дом',
  type: 'House',
  id: 3,
},
{
  img: 'img/apartment-02.jpg',
  price: 2900,
  title: 'Отель',
  type: 'Hotel',
  id: 4,
}];
