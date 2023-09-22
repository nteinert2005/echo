import { Flex, Input, InputRightAddon, Button, InputGroup, InputLeftElement, } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";


const Header = () => {
  return(
    <Flex width="50%" position={'relative'} zIndex={999} left="25%" mt="0">
      <InputGroup borderRadius={5} size="lg">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="lg" colorScheme="blue" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Flex>
  )
}


export default Header;