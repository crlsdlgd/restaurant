export interface Restaurant {
  id: number;
  name: string;
  address: string;
  postcode: string;
  rating: number;
  typeOfFood: string;
}

export interface RestaurantResponse {
  restaurants: Restaurant[];
  totalRestaurants: number;
}
