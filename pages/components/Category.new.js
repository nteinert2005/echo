import { LinkIcon, MoonIcon, SpinnerIcon, SunIcon } from "@chakra-ui/icons";
import { Container, Flex, Icon, Text } from "@chakra-ui/react"
import { RouterIcon } from "./icons";
import { useState } from "react";

export const categories = [
    {
        label: "Routers",
        icon: RouterIcon 
    }, {
        label: "Computers",
        icon: LinkIcon
    }, {
        label: "Monitors",
        icon: SpinnerIcon
    }, {
        label: "Apple TV",
        icon: SunIcon
    }, {
        label: "Chrome",
        icon: SunIcon
    }, {
        label: "Switches",
        icon: SunIcon
    }, {
        label: "Terminals",
        icon: SunIcon
    }, {
        label: "Scanners",
        icon: SunIcon
    }
]

const Categories = () => {
    const [ activeFilter, setActiveFilter ] = useState(null);

    const setSelectedFiilter = (key) => {
        setActiveFilter(key);
    }


    return(
            <Flex width="80%" margin="0 auto" pt={4} alignItems={'center'} justifyContent={'space-between'} overflowX={'auto'}>
                { categories.map((item, key) => (
                    <Flex backgroundColor={activeFilter === key ? 'red': "none"} borderRadius={'40px'} onClick={() => setSelectedFiilter(key)} flexDir={'column'} color="white" p={3} alignItems={'center'} textAlign={'center'}>
                        <Icon as={item.icon} fontSize={'26px'} /> 
                        <Text marginTop={3} fontWeight={'medium'} fontSize={'sm'}> { item.label} </Text>
                    </Flex>
                ))}
            </Flex>
    )
}


export default Categories;