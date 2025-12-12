import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import type { Restaurant } from "../../types/Restaurant";

interface UpdateRestaurantModalProps {
  updateRestaurant: Restaurant;
  setUpdateRestaurant: (value: Restaurant) => void;
  setUpdated: (value: boolean) => void;
  showUpdateRestaurantModal: boolean;
  setShowUpdateRestaurantModal: (value: boolean) => void;
}

const UpdateRestaurantModal: React.FC<UpdateRestaurantModalProps> = ({
  updateRestaurant,
  setUpdateRestaurant,
  setUpdated,
  showUpdateRestaurantModal,
  setShowUpdateRestaurantModal,
}: UpdateRestaurantModalProps) => {
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setShowUpdateRestaurantModal(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setUpdated(true)}
        autoFocus
        type="submit"
      />
    </div>
  );

  return (
    <div>
      <Dialog
        header="Header"
        visible={showUpdateRestaurantModal}
        footer={footerContent}
        onHide={() => {
          setShowUpdateRestaurantModal(false);
        }}
      >
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={updateRestaurant.name}
              onChange={(e) =>
                setUpdateRestaurant({
                  ...updateRestaurant,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={updateRestaurant.address}
              onChange={(e) =>
                setUpdateRestaurant({
                  ...updateRestaurant,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              id="postcode"
              value={updateRestaurant.postcode}
              onChange={(e) =>
                setUpdateRestaurant({
                  ...updateRestaurant,
                  postcode: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              value={updateRestaurant.rating}
              onChange={(e) =>
                setUpdateRestaurant({
                  ...updateRestaurant,
                  rating: Number(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label htmlFor="typeOfFood">Type of food</label>
            <input
              type="text"
              id="typeOfFood"
              value={updateRestaurant.typeOfFood}
              onChange={(e) =>
                setUpdateRestaurant({
                  ...updateRestaurant,
                  typeOfFood: e.target.value,
                })
              }
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default UpdateRestaurantModal;
