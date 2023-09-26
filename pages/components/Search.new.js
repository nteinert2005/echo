import { Flex, Input } from "@chakra-ui/react";

const Search = () => {
    return (
                <Flex width="40%" fontSize={'sm'} fontWeight={'semibold'} px={6}> 
                    <Input rounded="full" shadow="sm" border="1px solid #282834 !important" placeholder="Search Items..." />
                </Flex>
    )
}

export default Search;