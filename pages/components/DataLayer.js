import { useEffect, useRef, useState } from "react";
import DataDrawer from "./DataDrawer";
import { filter, useDisclosure } from "@chakra-ui/react";
import axios from "axios";

const DataLayer = ({ data, filterData }) => {
    const canvasRef = useRef();

    const { isOpen, onClose, onOpen } = useDisclosure();
    const [ singleData, setSingleData ] = useState();

    useEffect(() => {

        console.log(data);
        var canvas = canvasRef.current;


        canvas.height = 700;
        canvas.width = 1800;

        data.map((item) => {
            if(item.location === "FountainAve"){
                switch (item.type) {
                    case 'computers':
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, '#e60049');
                        break;
                    case "monitors":
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, '#0bb4ff');
                        break;
                    case "terminals":
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, '#50e991')
                        break;
                    
                    case 'tv':
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, '#e6d800');
                        break;
                    case "apple-tv":
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, '#9b19f5')
                        break;

                    case 'scanners':
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, '#ffa300')
                        break;

                    case 'routers':
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, '#3b3734')
                        break;

                    default: 
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, 'gray');
                        break;
                }
            }
        })        
    }, []);

    useEffect(() => {
        if(filterData !== "all"){
        console.log(filterData);

        data.map((item) => {
            if(item.location === "FountainAve"){                
                if(item.type === filterData){
                    drawDataPoint(item.exactLocation.x, item.exactLocation.y, 'green')
                } else {
                    drawDataPoint(item.exactLocation.x, item.exactLocation.y, 'gray')
                }
            }
        }) 
        }
    }, [filterData])

    async function createNewPoint(x, y){
        const createNode = await axios({
            method: 'post',
            url: '/api/inventory/new',
            data: {
                type: "",
                x: x,
                y: y,
            }
        });
        return createNode;
    }


    function checkClickLocation(x,y){
        data.forEach(element => {
            if(Math.pow(x-element.exactLocation.x, 2) + Math.pow(y-element.exactLocation.y, 2) < Math.pow(10, 2)){
                setSingleData(element);
                onOpen();
            }
        });


        var test = data.some((element) => Math.pow(x-element.exactLocation.x, 2) + Math.pow(y-element.exactLocation.y, 2) < Math.pow(10, 2) )
        
        if(test === false){
            createNewPoint(x,y).then((data) => {
                drawDataPoint(x, y, 'gray');
            })
        }
    }

    function drawDataPoint(x,y, color){
        var canvas = canvasRef.current;
        var context = canvas.getContext('2d');
        context.beginPath();
        context.arc(x,y,10,0,2 * Math.PI);
        context.fillStyle = color;
        context.strokeStyle = color;
        context.stroke();
        context.fill();
    }

    useEffect(() => {
        var canvasEl = document.getElementById("dataCanvas")
    
    canvasEl.addEventListener('click', (event) => {
        var x = event.pageX - (canvasEl.offsetLeft + canvasEl.clientLeft);
        var y = event.pageY - (canvasEl.offsetTop + canvasEl.clientTop);
    
        checkClickLocation(x,y);
    })
    }, [])

    return(
        <>
        <canvas id="dataCanvas" ref={canvasRef} style={{ left: '5%', top: "20%", position: 'absolute'}}></canvas>
        <DataDrawer data={singleData} isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> 
        </> 
    )   
}


export default DataLayer;