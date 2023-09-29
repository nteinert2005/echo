import { LinkIcon, MoonIcon, SpinnerIcon, SunIcon } from "@chakra-ui/icons";
import { Container, Flex, Icon, Text } from "@chakra-ui/react"
import { RouterIcon } from "./icons/Router";
import { useState } from "react";

export const categories = [
    {
        label: "Routers",
        icon: RouterIcon,
        color: "#3b3734"
    }, {
        label: "Computers",
        icon: LinkIcon,
        color: "#e60049"
    }, {
        label: "Monitors",
        icon: SpinnerIcon,
        color: "#0bb4ff"
    }, {
        label: "Apple TV",
        icon: SunIcon, 
        color: "#9b19f5"
    }, {
        label: "Chrome",
        icon: SunIcon,
        color: "#e6d800"
    }, {
        label: "Switches",
        icon: SunIcon,
        color: ""
    }, {
        label: "Terminals",
        icon: SunIcon,
        color: "#50e991"
    }, {
        label: "Scanners",
        icon: SunIcon,
        color: "#ffa300"
    }
]

const Categories = () => {
    const [ activeFilter, setActiveFilter ] = useState(null);

    const setSelectedFiilter = (key) => {
        setActiveFilter(key);
    }


    return(
            <Flex width="80%" margin="0 auto" pt={4} mb={'2em'} alignItems={'center'} justifyContent={'space-between'}>
                { categories.map((item, key) => (
                    <Flex backgroundColor={activeFilter === key ? item.color : "none"} borderRadius={'40px'} onClick={() => setSelectedFiilter(key)} flexDir={'column'} color="white" p={3} alignItems={'center'} textAlign={'center'}>
                        <Icon as={item.icon} fontSize={'26px'} /> 
                        <Text marginTop={3} fontWeight={'medium'} fontSize={'sm'}> { item.label} </Text>
                    </Flex>
                ))}
            </Flex>
    )
}


export default Categories;