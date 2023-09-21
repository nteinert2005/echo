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
  } from '@chakra-ui/react'

const DataDrawer = ({ data, isOpen, onOpen, onClose  }) => {
    console.log(data);


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
              <DrawerHeader>Create your account</DrawerHeader>
    
              { data !== undefined && 
              <DrawerBody>
                <FormControl>
                    <FormLabel htmlFor='email'>Item Type:</FormLabel>
                    <Input readOnly id='email' value={data.type} type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Location:</FormLabel>
                    <Input readOnly id='email' value={data.location} type='text' />

                </FormControl>
                <FormControl>
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