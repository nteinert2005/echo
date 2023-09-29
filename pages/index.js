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
import Navbar from "./components/Navbar.new";
import Categories from "./components/Category.new"
import dynamic from "next/dynamic";

const IndexPage = ({ isConnected }) => {

    const MapLayer = dynamic(() => import('../components/Map.new'), {
        ssr: false
    })

    const [filterData, setFilterData] = useState("all");
    const [ data, setData ] = useState(null);
    
    const fetchData = async() => {
        const res = await axios.get('/api/inventory/all');
        return res.data;
    }


    
    useEffect(() => {
       fetchData().then((dbData) => {
        setData(dbData);
       })
    }, []);

    return(
        // <div style={{ background: "#0E0E11", overflow: "hidden", color: 'white', height: '100vh'}}>
        // <Header /> 
        // <Flex margin="0 auto" height="100%" style={{ marginTop: "-20px"}} width="100%">
        //     <FilterBy data={data} setFilterData={setFilterData} filterData={filterData} /> 
        //     <MapCanvas map={'images/bg.jpg'} />     
        //     { data !== null && <DataLayer data={data} filterData={filterData} />  }
        // </Flex>
        // </div>
        <>
        
        <Flex flexDir='column' background="#0E0E11" height="100vh">
            <Navbar />
            <Categories /> 
            <MapLayer /> 
            {/* <MapCanvas map={'/images/SCPlant1.jpg'} /> 
            { data !== null && <DataLayer data={data} filterData={filterData} /> } */}
        </Flex> 
        </>
    )
}


export default IndexPage;