import { useEffect, useRef, useState } from "react";
import DataDrawer from "./DataDrawer";
import { filter, useDisclosure } from "@chakra-ui/react";

const DataLayer = ({ data, filterData }) => {
    const canvasRef = useRef();

    const { isOpen, onClose, onOpen } = useDisclosure();
    const [ singleData, setSingleData ] = useState();

    useEffect(() => {

        console.log(data);
        var canvas = canvasRef.current;


        canvas.height = 900;
        canvas.width = 1600;

        data.map((item) => {
            if(item.location === "FountainAve"){
                switch (item.type) {
                    case 'computers':
                    case "monitors":
                    case "terminals":
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, 'red')
                        break;
                    
                    case 'tv':
                    case "apple-tv":
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, 'blue')
                        break;

                    case 'scanners':
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, 'green')
                        break;

                    default: 
                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, 'black')
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


    function checkClickLocation(x,y){
        data.forEach(element => {
            if(Math.pow(x-element.exactLocation.x, 2) + Math.pow(y-element.exactLocation.y, 2) < Math.pow(10, 2)){
                setSingleData(element);
                onOpen();
            }
        });


        var test = data.some((element) => Math.pow(x-element.exactLocation.x, 2) + Math.pow(y-element.exactLocation.y, 2) < Math.pow(10, 2) )
        
        if(test === false){
            drawDataPoint(x,y, 'gray');
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
        <canvas id="dataCanvas" ref={canvasRef} style={{ left: '10%', position: 'absolute'}}></canvas>
        <DataDrawer data={singleData} isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> 
        </> 
    )   
}


export default DataLayer;