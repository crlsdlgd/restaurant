export interface Restaurant {
  id: string;
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

export interface RestaurantRequest {
  name: string;
  address: string;
  postcode: string;
  rating: number;
  typeOfFood: string;
}
