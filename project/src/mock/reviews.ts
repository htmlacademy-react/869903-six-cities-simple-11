export type ReviewsType = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  data: string;
}

export const reviews: ReviewsType[] = [
  {
    id: 3,
    name: 'Alex',
    avatar: 'img/avatar.svg',
    rating: 4.2,
    text: 'Best of the best',
    data: 'May 2020'
  },
  {
    id: 5,
    name: 'Daria',
    avatar: 'img/avatar-angelina.jpg',
    rating: 4.8,
    text: 'Best of the bad',
    data: 'June 2020'
  }
];
