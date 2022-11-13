export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  zoom: number;
  latitude: number;
  longitude: number;
};

export type Points = Point[];
