import type React from "react";
import type { Restaurant } from "../../types/Restaurant";
import { Table } from "react-bootstrap";

interface RestaurantTableProps {
  restaurants: Restaurant[];
}

const RestaurantTable: React.FC<RestaurantTableProps> = ({
  restaurants,
}: RestaurantTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Postcode</th>
          <th>Rating</th>
          <th>Type of food</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td> {restaurant.name}</td>
            <td> {restaurant.address}</td>
            <td> {restaurant.postcode}</td>
            <td> {restaurant.rating}</td>
            <td> {restaurant.typeOfFood}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RestaurantTable;
