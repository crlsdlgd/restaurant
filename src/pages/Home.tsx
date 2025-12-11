import { useEffect, useState } from "react";
import type { RestaurantResponse } from "../types/Restaurant";
import { RestaurantService } from "../services/RestaurantService";
import RestaurantFilter from "../components/restaurant-filter/RestaurantFilter";
import RestaurantTable from "../components/restaurant-table/RestaurantTable";
//import RestaurantPagination from "../components/restaurant-pagintion/RestaurantPagination";
import RestaurantPaginator from "../components/restaurant-paginator/RestaurantPaginator";

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
      <RestaurantFilter setSearchFilters={setSearchFilters} />
      {restaurantsResponse.restaurants && (
        <RestaurantTable restaurants={restaurantsResponse.restaurants} />
      )}
      {/* <RestaurantPagination
        totalPages={restaurantsResponse.totalPages}
        setPaginationFilter={setPaginationFilter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
      <RestaurantPaginator
        totalRestaurants={restaurantsResponse.totalRestaurants}
        setPaginationFilter={setPaginationFilter}
      />
    </div>
  );
};

export default Home;
