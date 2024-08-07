export type Event = {
  event_id: Number;
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
  location_id: number;
};

export type Categories = {
  category_id: Number;
  name: string;
}[];

export type Locations = {
  location_id: Number;
  name: string;
}[];

export type TicketOrderItems = {
  ticket_type_id: number;
  quantity: number;
  price: number;
};

export type Location = {
  location_id: number;
  name: string;
};
