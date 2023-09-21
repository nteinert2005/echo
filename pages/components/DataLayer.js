import { useEffect, useRef, useState } from "react";
import DataDrawer from "./DataDrawer";
import { useDisclosure } from "@chakra-ui/react";

const DataLayer = ({ data}) => {
    const canvasRef = useRef();

    const { isOpen, onClose, onOpen } = useDisclosure();
    const [ singleData, setSingleData ] = useState();

    useEffect(() => {
        var canvas = canvasRef.current;
        var context = canvas.getContext('2d');


        canvas.height = 900;
        canvas.width = 1600;

        data.items.map((item) => {
            if(item.location === "FountainAve"){
                context.beginPath();
                context.arc(item.exactLocation.x,item.exactLocation.y,10,0,2 * Math.PI);
                
                switch (item.type) {
                    case 'computer':
                    case "monitor":
                    case "terminal":
                        context.fillStyle = "#BB86FC";
                        context.fill();
                        context.strokeStyle = "#BB86FC";
                        context.stroke();
                        break;
                    
                    case 'tv':
                    case "apple-tv":
                        context.fillStyle = "#3700B6";
                        context.fill();
                        context.strokeStyle = "#3700B6";
                        context.stroke();
                        break;

                    case 'scanner':
                        context.fillStyle = "#01DBC6";
                        context.fill();
                        context.strokeStyle = "#01DBC6";
                        context.stroke();
                        break;

                    default: 
                        context.fillStyle = 'gray';
                        context.fill();
                        context.strokeStyle = 'gray';
                        context.stroke();
                }
            }
        })        
    }, []);


    function checkClickLocation(x,y){
        data.items.forEach(element => {
            if(Math.pow(x-element.exactLocation.x, 2) + Math.pow(y-element.exactLocation.y, 2) < Math.pow(10, 2)){
                setSingleData(element);
                onOpen();
            }
        });
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