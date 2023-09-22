import { Checkbox, Flex, HStack, VStack } from "@chakra-ui/react"

const FilterBy = ({ setFilterData}) => {

    const categories = [
        { 
            id: "Computers",
            key: "computers"
        }, {
            id: "Monitors",
            key: "monitors"
        }, {
            id: "Apple TV",
            key: "apple-tv"
        }, {
            id: "Chromecast",
            key: "chromecast"
        }, {
            id: "Switches",
            key: "switches"
        }, {
            id: "Routers",
            key: "routers"
        }, {
            id: "Terminals",
            key: "terminals"
        }, {
            id: "Scanners",
            key: "scanners"
        }, {
            id: "Reset Filters",
            key: "all"
        }
    ]

    function filterBySort(val){
        setFilterData(val);
    }
   
    return(
        <Flex color="black" width="200px" p={6} flexDir="column" mt="5%">
            <h2> Filter By:</h2>

            <ul style={{marginTop: '10px' }}>
                { categories.map((category, key) => (
                    <Checkbox key={key} onChange={(e) => {
                        filterBySort(e.target.value)
                    }} width="100%" value={category.key} size="lg"> { category.id } </Checkbox>
                ))}
            </ul>
        </Flex>
    )
}


export default FilterBy;