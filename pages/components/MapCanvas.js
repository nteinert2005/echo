import { useEffect, useRef } from "react";

const MapCanvas = ({ map }) => {
    const canvasRef = useRef();


    useEffect(() => {
        var canvas = canvasRef.current;
        var context = canvas.getContext('2d');


        canvas.height = 900;
        canvas.width = 1600;

        var newMap = new Image();
        newMap.onload = () => {
            context.drawImage(newMap, 0, 0, newMap.width * 2, newMap.height * 2)
        };

        newMap.src = map; 
    }, []);

    return(
            <canvas ref={canvasRef} style={{ left: '15%', position: 'absolute'}}></canvas>
          
    )
}


export default MapCanvas;