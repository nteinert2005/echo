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
import { useEffect, useState } from 'react'
import axios from 'axios'

const DataDrawer = ({ data, isOpen, onOpen, onClose  }) => {
    const [ dataItem, setDataItem ] = useState({
      type: null, 
      location: null, 
      uid: null,
      id: null 
})

const [ isUpdating, setIsUpdating ] = useState(false);
const [ isSaved, setIsSaved ] = useState(false);


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


    const updateItem = (field, e) => {
      setDataItem({
        ...dataItem,
        [field]: e.target.value 
      })
    }

    async function saveUpdate(){
      setIsUpdating(true);
      const updateNode = await axios({
        method: 'post',
        url: '/api/inventory/update',
        data: dataItem
    });

      return updateNode;
    }


    const updateItemCall = () => {
      saveUpdate().then((response) => {
        if(response.data.data === true){
          setIsUpdating(false);
          setIsSaved(true);
        }
      })
    }


    useEffect(() => {
      setDataItem(data)
      console.log(dataItem);
    }, [data])


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
                    <Select onChange={(e) => {
                          updateItem('type', e)
                        }}>
                      { typeOptions.map((option) => (
                        <option  value={option.key}> { option.id} </option>
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
                    <Input onChange={(e) => {
                      updateItem('uid', e)
                    }} id='uid' value={data.UID} type='text' />

                </FormControl>
              </DrawerBody>
}
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={() => updateItemCall()} isDisabled={isUpdating} colorScheme='blue'> { isUpdating ? "Updating..." : "Save" }</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
}


export default DataDrawer;