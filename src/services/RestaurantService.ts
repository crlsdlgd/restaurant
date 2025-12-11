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
}
