import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
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
import moment from 'moment';

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
      <ModalOverlay bg="rgba(0,0,0,.9)" />
      <ModalContent bg="#1E1E27" textColor={'white'}>
        <ModalHeader> Edit Details </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            templateRows={'repeat(2, 1fr)'}
            templateColumns={'repeat(2, 1fr)'}
          >
            <GridItem
              display={'flex'}
              alignItems={'center'}
              justifyItems={'center'}
              bg="#282834"
              p={3}
              mr="10px"
            >
              <FormControl>
                <FormLabel fontSize="12px" textColor={'#848496'}>
                  {' '}
                  Type:{' '}
                </FormLabel>
                <Select
                  border="none"
                  paddingInlineStart={0}
                  paddingInlineEnd={0}
                  padding="0"
                  margin="0"
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
            </GridItem>
            <GridItem
              display={'flex'}
              alignItems={'center'}
              justifyItems={'center'}
              bg="#282834"
              p={3}
            >
              <FormControl>
                <FormLabel fontSize={'12px'} textColor={'#848496'}>
                  {' '}
                  UID:{' '}
                </FormLabel>
                <Input
                  paddingInlineStart={0}
                  paddingInlineEnd={0}
                  border={0}
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
            </GridItem>
            <GridItem bg="#282834" p={3} mr="10px" mt="10px">
              <FormControl>
                <FormLabel fontSize={'12px'} textColor={'#848496'}>
                  {' '}
                  Bar Code:{' '}
                </FormLabel>
                <Input
                  paddingInlineStart={0}
                  paddingInlineEnd={0}
                  border={0}
                  placeholder="Bar Code"
                  value={selectedItem?.barCode}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      barCode: e.target.value,
                    })
                  }
                />
              </FormControl>
            </GridItem>
            <GridItem bg="#282834" p={3} mt="10px">
              <FormControl>
                <FormLabel fontSize={'12px'} textColor={'#848496'}>
                  {' '}
                  IP Address:{' '}
                  <a
                    style={{
                      float: 'right',
                      textDecoration: 'underline',
                      fontSize: '13px',
                      color: 'white',
                    }}
                    href="http://www.google.com"
                  >
                    {' '}
                    Link{' '}
                  </a>
                </FormLabel>
                <Input
                  color="white"
                  paddingInlineStart={0}
                  paddingInlineEnd={0}
                  border={0}
                  placeholder="IP Address"
                  value={selectedItem?.ipAddress}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      ipAddress: e.target.value,
                    })
                  }
                />
              </FormControl>
            </GridItem>
          </Grid>
          <FormControl mt={'30px'}>
            <FormLabel> Last Changed: </FormLabel>
            <Text textColor={'#848496'} fontSize="12px">
              {moment(selectedItem?.ipAddressCheck).fromNow()}{' '}
            </Text>
          </FormControl>
          <FormControl mt={'30px'}>
            <FormLabel> Last Scanned: </FormLabel>
            <Text textColor={'#848496'} fontSize={'12px'}>
              {' '}
              {selectedItem?.updatedBy} -{' '}
              {moment(selectedItem?.updatedLast).fromNow()}{' '}
            </Text>
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
