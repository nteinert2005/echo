// default imports 
import { Flex } from "@chakra-ui/react";

// maps 
import MapCanvas from "./components/MapCanvas";
import DataLayer from "./components/DataLayer";

// data 
import Header from "./components/DesktopMenu";
import FilterBy from "./components/FilterBy";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



const IndexPage = ({ isConnected }) => {
    const [filterData, setFilterData] = useState("all");
    const [ data, setData ] = useState(null);

    const fetchData = async() => {
        const res = await axios.get('/api/inventory/all');
        return res.data;
    }


    useEffect(async () => {
       fetchData().then((dbData) => {
        setData(dbData);
       })
    }, []);

    return(
        <>
        <Header /> 
        <Flex margin="0 auto" height="100%" style={{ marginTop: "-20px"}} width="100%">
            <FilterBy setFilterData={setFilterData} filterData={filterData} /> 
            <MapCanvas map={'images/bg.jpg'} />     
            { data !== null && <DataLayer data={data} filterData={filterData} />  }
        </Flex>
        </>
    )
}


export default IndexPage;