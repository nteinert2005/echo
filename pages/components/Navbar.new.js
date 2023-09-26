import { Container, Flex } from "@chakra-ui/react"
import Search from "./Search.new";
import Logo from "./Logo.new";
import UAC from "./UAC.new";

const Navbar = () => {
    return (
            <Flex p={4} width="100%" height="80px" background="#0E0E11" borderBottom={'1px solid #282834'}>
                <Container maxWidth="100%">
                    <Flex justifyItems={'center'} justifyContent={'space-between'} gap={3}>
                        <Logo /> 
                        <Search /> 
                        <UAC /> 
                    </Flex>
                </Container>
            </Flex>
    )
}


export default Navbar;