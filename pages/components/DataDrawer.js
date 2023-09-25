import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Input,
    Button,
    FormControl,
    FormLabel,
    DrawerCloseButton,
    Select,
  } from '@chakra-ui/react'

const DataDrawer = ({ data, isOpen, onOpen, onClose  }) => {
      const typeOptions = [ { 
        id: "Computers",
        key: "computers",
        count: 0,
    }, {
        id: "Monitors",
        key: "monitors",
        count: 0
    }, {
        id: "Apple TV",
        key: "apple-tv",
        count: 0
    }, {
        id: "Chromecast",
        key: "chromecast",
        count: 0
    }, {
        id: "Switches",
        key: "switches",
        count: 0
    }, {
        id: "Routers",
        key: "routers",
        count: 0
    }, {
        id: "Terminals",
        key: "terminals",
        count: 0
    }, {
        id: "Scanners",
        key: "scanners",
        count: 0
    }, {
        id: "Unknown",
        key: "",
        count: 0,
    }]



      return (
        <>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Edit Inventory Item</DrawerHeader>
    
              { data !== undefined && 
              <DrawerBody>
                <FormControl mb="1em">
                    <FormLabel htmlFor='email'>Item Type:</FormLabel>
                    <Select>
                      { typeOptions.map((option) => (
                        <option value={option.key}> { option.id} </option>
                      ))}
                    </Select>
                    {/* <Input readOnly id='email' value={data.type} type='text' /> */}
                </FormControl>
                <FormControl mb="1em">
                    <FormLabel htmlFor='email'>Location:</FormLabel>
                    <Input readOnly id='email' value={data.location} type='text' />

                </FormControl>
                <FormControl mb="1em">
                    <FormLabel htmlFor='email'>UID</FormLabel>
                    <Input readOnly id='email' value={data.UID} type='text' />

                </FormControl>
              </DrawerBody>
}
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
}


export default DataDrawer;