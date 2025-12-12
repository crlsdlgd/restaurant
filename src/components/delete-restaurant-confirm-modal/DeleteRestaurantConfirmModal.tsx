import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface DeleteRestaurantConfirmModalProps {
  setDeleted: (updated: boolean) => void;
  showDeleteRestaurantConfirmModal: boolean;
  setShowDeleteRestaurantConfirmModal: (value: boolean) => void;
}

const DeleteRestaurantConfirmModal: React.FC<
  DeleteRestaurantConfirmModalProps
> = ({
  setDeleted,
  showDeleteRestaurantConfirmModal,
  setShowDeleteRestaurantConfirmModal,
}: DeleteRestaurantConfirmModalProps) => {
  return (
    <div>
      <Dialog
        visible={showDeleteRestaurantConfirmModal}
        onHide={() => setShowDeleteRestaurantConfirmModal(false)}
      >
        <p>Are you sure you want to delete this restaurant?</p>
        <div>
          <Button
            label="No"
            icon="pi pi-times"
            onClick={() => setShowDeleteRestaurantConfirmModal(false)}
            className="p-button-text"
          />
          <Button
            label="Yes"
            icon="pi pi-check"
            onClick={() => setDeleted(true)}
            autoFocus
            type="submit"
          />
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteRestaurantConfirmModal;
