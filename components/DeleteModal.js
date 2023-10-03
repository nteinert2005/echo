import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";

const DeleteModal = ({ isOpen, onOpen, onClose, selectedItem }) => {
  async function deleteQuery(id) {
    const results = await axios({
      method: "POST",
      url: "/api/inventory/delete",
      data: {
        _id: id,
      },
    });
  }

  const deleteItem = () => {
    var id = selectedItem._id;

    deleteQuery(id).then((data) => {
      location.reload();
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Delete Item? </ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this item?</ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="solid"
            onClick={() => deleteItem()}
            colorScheme="red"
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
