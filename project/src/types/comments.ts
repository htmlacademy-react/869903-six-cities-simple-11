export type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type CommentSendType = {
  comment: string;
  rating: number;
  hotelId: number;
}
