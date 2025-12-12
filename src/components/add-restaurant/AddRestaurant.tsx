import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import type { Restaurant } from "../../types/Restaurant";
import { RestaurantService } from "../../services/RestaurantService";
import "./AddRestaurant.css";

const AddRestaurant: React.FC = () => {
  const [showAddRestaurantModal, setShowAddRestaurantModal] =
    useState<boolean>(false);
  const [createRestaurant, setCreateRestaurant] = useState<Restaurant>();

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setShowAddRestaurantModal(false)}
        className="p-button-text"
      />
      <Button
        label="Create"
        icon="pi pi-check"
        onClick={(e) => handleSubmit(e)}
        autoFocus
        type="submit"
      />
    </div>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const restaurantService = new RestaurantService();
    const response = restaurantService.createRestaurant(createRestaurant!);
    if (response) {
      alert("Restaurant created");
      setInterval(() => {
        window.location.reload();
      }, 1000);
    } else {
      alert("Error creating restaurant");
    }
    setShowAddRestaurantModal(false);
  };
  return (
    <div className="add-restaurant flex m-2">
      <Button
        icon="pi pi-plus"
        onClick={() => setShowAddRestaurantModal(true)}
      />

      <Dialog
        header="Create Restaurant"
        visible={showAddRestaurantModal}
        onHide={() => setShowAddRestaurantModal(false)}
        footer={footerContent}
        className="add-restaurant-dialog"
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-grid">
          <div className="p-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={createRestaurant?.name}
              onChange={(e) =>
                setCreateRestaurant({
                  ...createRestaurant,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              required
              value={createRestaurant?.address}
              onChange={(e) =>
                setCreateRestaurant({
                  ...createRestaurant,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="postcode">Postcode</label>
            <input
              id="postcode"
              type="text"
              required
              value={createRestaurant?.postcode}
              onChange={(e) =>
                setCreateRestaurant({
                  ...createRestaurant,
                  postcode: e.target.value,
                })
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="rating">Rating</label>
            <input
              id="rating"
              type="number"
              required
              value={createRestaurant?.rating}
              onChange={(e) =>
                setCreateRestaurant({
                  ...createRestaurant,
                  rating: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="typeOfFood">Type of food</label>
            <input
              id="typeOfFood"
              type="text"
              required
              value={createRestaurant?.typeOfFood}
              onChange={(e) =>
                setCreateRestaurant({
                  ...createRestaurant,
                  typeOfFood: e.target.value,
                })
              }
            />
          </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AddRestaurant;
