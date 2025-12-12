import { useEffect, useState } from "react";
import type { RestaurantResponse } from "../types/Restaurant";
import { RestaurantService } from "../services/RestaurantService";
import RestaurantFilter from "../components/restaurant-filter/RestaurantFilter";
import RestaurantTable from "../components/restaurant-table/RestaurantTable";
import RestaurantPaginator from "../components/restaurant-paginator/RestaurantPaginator";
import AddRestaurant from "../components/add-restaurant/AddRestaurant";
import { PrimeReactProvider } from "primereact/api";

const Home: React.FC = () => {
  const [restaurantsResponse, setRestaurantsResponse] =
    useState<RestaurantResponse>({ restaurants: [], totalRestaurants: 0 });
  const [searchFilters, setSearchFilters] = useState<string>("");
  const [paginationFilter, setPaginationFilter] = useState<string>("");
  const [globalFilters, setGlobalFilters] = useState<string>("");

  useEffect(() => {
    setGlobalFilters(`?${searchFilters}&${paginationFilter}`);
  }, [searchFilters, paginationFilter]);

  useEffect(() => {
    fetchRestaurants();
  }, [globalFilters]);

  const fetchRestaurants = async () => {
    const restaurantService = new RestaurantService();
    const response = await restaurantService.getRestaurants(globalFilters);
    setRestaurantsResponse(response);
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <PrimeReactProvider>
        <RestaurantFilter setSearchFilters={setSearchFilters} />
        <AddRestaurant />
        {restaurantsResponse.restaurants && (
          <RestaurantTable restaurants={restaurantsResponse.restaurants} />
        )}
        <RestaurantPaginator
          totalRestaurants={restaurantsResponse.totalRestaurants}
          setPaginationFilter={setPaginationFilter}
        />
      </PrimeReactProvider>
    </div>
  );
};

export default Home;
