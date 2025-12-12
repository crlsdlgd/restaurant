import type React from "react";
import type { Restaurant } from "../../types/Restaurant";

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  restaurants,
}: RestaurantGridProps) => {
  return <div>Restaurant grid</div>;
};

export default RestaurantGrid;
