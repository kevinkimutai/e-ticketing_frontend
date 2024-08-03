export type Event = {
  name: string;
  category_id: Number;
  date: Date;
  from_time: Date;
  to_time: Date;
  location: string;
  description: string;
  longitude: Number;
  latitude: Number;
  poster_url: string;
};

export type Categories = {
  category_id: Number;
  name: string;
}[];
