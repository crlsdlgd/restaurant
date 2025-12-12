import type React from "react";
import type { Restaurant } from "../../types/Restaurant";
import { Table } from "react-bootstrap";
import RestaurantActions from "../restaurant-actions/RestaurantActions";

import "./RestaurantTable.css";

interface RestaurantTableProps {
  restaurants: Restaurant[];
}

const RestaurantTable: React.FC<RestaurantTableProps> = ({
  restaurants,
}: RestaurantTableProps) => {
  return (
    <div className="restaurant-table-container">
      <Table className="restaurant-table" responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Postcode</th>
          <th>Rating</th>
          <th>Type of food</th>
          <th>Actions</th>
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
            <td>
              <RestaurantActions restaurant={restaurant} />
            </td>
          </tr>
        ))}
      </tbody>
      </Table>
    </div>
  );
};

export default RestaurantTable;
