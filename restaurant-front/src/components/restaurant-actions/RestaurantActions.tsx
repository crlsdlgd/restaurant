import { Button } from "primereact/button";
import type React from "react";
import { useEffect, useState } from "react";
import { RestaurantService } from "../../services/RestaurantService";
import UpdateRestaurantModal from "../update-restaurant-modal/UpdateRestaurantModal";
import DeleteRestaurantConfirmModal from "../delete-restaurant-confirm-modal/DeleteRestaurantConfirmModal";
import type { Restaurant } from "../../types/Restaurant";
// import "./RestaurantActions.css";

interface RestaurantActionsProps {
  restaurant: Restaurant;
}

const RestaurantActions: React.FC<RestaurantActionsProps> = ({
  restaurant,
}: RestaurantActionsProps) => {
  const [showUpdateRestaurantModal, setShowUpdateRestaurantModal] =
    useState<boolean>(false);
  const [
    showDeleteRestaurantConfirmModal,
    setShowDeleteRestaurantConfirmModal,
  ] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(false);
  const [updateRestaurant, setUpdateRestaurant] =
    useState<Restaurant>(restaurant);

  useEffect(() => {
    const deleteRestaurant = async () => {
      const restaurantService = new RestaurantService();
      const response = await restaurantService.deleteRestaurant(restaurant.id);
      if (response) {
        alert("Restaurant deleted");
        setInterval(() => {
          window.location.reload();
        }, 1000);
      } else {
        alert("Error deleting restaurant");
      }
      setShowDeleteRestaurantConfirmModal(false);
      setDeleted(false);
    };

    if (deleted) {
      deleteRestaurant();
    }
  }, [deleted]);

  useEffect(() => {
    const fecthUpdateRestaurant = async () => {
      const restaurantService = new RestaurantService();
      const response = await restaurantService.updateRestaurant(
        restaurant.id,
        updateRestaurant
      );
      if (response) {
        alert("Restaurant updated");
        setInterval(() => {
          window.location.reload();
        }, 1000);
      } else {
        alert("Error updating restaurant");
      }
      setShowUpdateRestaurantModal(false);
      setUpdated(false);
    };

    if (updated) {
      fecthUpdateRestaurant();
    }
  }, [updated]);

  const handleUpdate = () => {
    setShowUpdateRestaurantModal(true);
  };
  const handleDelete = () => {
    setShowDeleteRestaurantConfirmModal(true);
  };

  return (
    <>
      <div className="actions-container flex gap-2">
        <Button
          className="p-button-warning"
          onClick={handleUpdate}
          icon="pi pi-pencil"
        />
        <Button
          className="p-button-danger"
          onClick={handleDelete}
          icon="pi pi-trash"
        />
      </div>

      {/* {showUpdateRestaurantModal && (
        <UpdateRestaurantModal
          restaurantId={restaurantId}
          setUpdated={setUpdated}
        />
      )}
      {showDeleteRestaurantConfirmModal && (
        <DeleteRestaurantConfirmModal setDeleted={setDeleted} />
      )} */}
      <UpdateRestaurantModal
        updateRestaurant={updateRestaurant}
        setUpdateRestaurant={setUpdateRestaurant}
        setUpdated={setUpdated}
        showUpdateRestaurantModal={showUpdateRestaurantModal}
        setShowUpdateRestaurantModal={setShowUpdateRestaurantModal}
      />
      <DeleteRestaurantConfirmModal
        setDeleted={setDeleted}
        showDeleteRestaurantConfirmModal={showDeleteRestaurantConfirmModal}
        setShowDeleteRestaurantConfirmModal={
          setShowDeleteRestaurantConfirmModal
        }
      />
    </>
  );
};
export default RestaurantActions;
