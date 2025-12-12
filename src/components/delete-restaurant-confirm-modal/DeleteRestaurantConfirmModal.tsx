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
  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setShowDeleteRestaurantConfirmModal(false)}
        className="p-button-text"
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
        onClick={() => setDeleted(true)}
        autoFocus
        type="submit"
        severity="danger"
      />
    </div>
  );
  return (
    <div>
      <Dialog
        visible={showDeleteRestaurantConfirmModal}
        onHide={() => setShowDeleteRestaurantConfirmModal(false)}
        header="Delete Restaurant"
        footer={footerContent}
      >
        <p>Are you sure you want to delete this restaurant?</p>
      </Dialog>
    </div>
  );
};

export default DeleteRestaurantConfirmModal;
