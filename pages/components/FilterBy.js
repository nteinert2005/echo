import { Checkbox, Flex, HStack, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";

const FilterBy = ({ data, setFilterData}) => {
    const [ categoryCount, setCategoryCount ] = useState([])


    const [categories, setCategories] = useState([
        { 
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
        },{
            id: "Reset Filters",
            key: "all"
        }
    ])

    function filterBySort(val){
        setFilterData(val);
    }

    useEffect(() => {
        if(data !== null){

        var tempCategories = [...categories];
            data.map((dataItem) => {
                let target = tempCategories.find(item => item.key === dataItem.type);
                target.count++;
            })

            setCategories(tempCategories);
        }
    }, [data])


    return(
        <Flex color="white" width="250px" p={6} flexDir="column" mt="5%">
            <h2> Filter By:</h2>

            <ul style={{marginTop: '10px' }}>
                { categories.map((category, key) => (
                    <Checkbox key={key} onChange={(e) => {
                        filterBySort(e.target.value)
                    }} width="100%" value={category.key} size="lg"> { category.id } {category.id === "Reset Filters" ? null : `(${category.count})` } </Checkbox>
                ))}
            </ul>
        </Flex>
    )
}


export default FilterBy;