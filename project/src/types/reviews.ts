export type ReviewType = {
  id: number;
  user: {
    id: number;
    isPro: boolean;
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type Reviews = ReviewType[];
