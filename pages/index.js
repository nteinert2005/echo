// default imports 
import { Flex } from "@chakra-ui/react";

// maps 
import MapCanvas from "./components/MapCanvas";
import DataLayer from "./components/DataLayer";

// data 
import data from './data/testData.json';

const IndexPage = () => {
    return(
        <Flex margin="0 auto" height="100%" width="100%">
            <MapCanvas map={'images/bg.jpg'} /> 
            <DataLayer data={data} /> 
        </Flex>
    )
}

export default IndexPage;