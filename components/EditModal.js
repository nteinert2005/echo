import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

export const TypeOptions = [
  {
    id: 'Computers',
    key: 'computers',
    count: 0,
  },
  {
    id: 'Monitors',
    key: 'monitors',
    count: 0,
  },
  {
    id: 'Apple TV',
    key: 'apple-tv',
    count: 0,
  },
  {
    id: 'Chromecast',
    key: 'chromecast',
    count: 0,
  },
  {
    id: 'Switches',
    key: 'switches',
    count: 0,
  },
  {
    id: 'Routers',
    key: 'routers',
    count: 0,
  },
  {
    id: 'Terminals',
    key: 'terminals',
    count: 0,
  },
  {
    id: 'Scanners',
    key: 'scanners',
    count: 0,
  },
  {
    id: 'Unknown',
    key: '',
    count: 0,
  },
];

const EditModal = ({
  isOpen,
  onClose,
  onOpen,
  selectedItem,
  setSelectedItem,
}) => {
  async function updateQuery(data) {
    const results = await axios({
      url: '/api/inventory/update',
      method: 'POST',
      data: {
        data: data,
      },
    });
  }

  const updateItem = () => {
    updateQuery(selectedItem).then((data) => {
      onClose();
    });
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Edit Details </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel> Type: </FormLabel>
            <Select
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  type: e.target.value,
                })
              }
            >
              {TypeOptions.map((type, index) => (
                <option
                  selected={type.id === selectedItem?.type}
                  value={type.id}
                >
                  {' '}
                  {type.id}{' '}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={'30px'}>
            <FormLabel> UID: </FormLabel>
            <Input
              placeholder="UID"
              value={selectedItem?.uid}
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  uid: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl mt={'30px'}>
            <FormLabel> Last Online: </FormLabel>
            <Text fontSize="12px"> 14 minutes ago </Text>
          </FormControl>
          <FormControl mt={'30px'}>
            <FormLabel> Last Scanned: </FormLabel>
            <Text fontSize={'12px'}> nteinert - 4 days ago </Text>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="solid"
            colorScheme="green"
            onClick={() => updateItem()}
          >
            {' '}
            Update{' '}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
