import type { Restaurant } from "../types/Restaurant";

export class RestaurantService {
  private url: string;
  constructor() {
    this.url = "http://localhost:3000"; // Data de prueba (GET, POST, UPDATE, DELETE)
  }

  async getRestaurants(globalFilters?: string) {
    const response = await fetch(`${this.url}/restaurants${globalFilters}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  async deleteRestaurant(restaurantId: string) {
    const response = await fetch(`${this.url}/restaurants/${restaurantId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  async updateRestaurant(restaurantId: string, updateRestaurant: Restaurant) {
    const response = await fetch(`${this.url}/restaurants/${restaurantId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateRestaurant),
    });
    const data = await response.json();
    return data;
  }

  async createRestaurant(restaurant: Restaurant) {
    const response = await fetch(`${this.url}/restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });
    const data = await response.json();
    return data;
  }
}
