import { useEffect, useRef } from "react";

const MapCanvas = ({ map }) => {
    const canvasRef = useRef();


    useEffect(() => {
        var canvas = canvasRef.current;
        var context = canvas.getContext('2d');


        canvas.height = 700;
        canvas.width = 1250;

        var newMap = new Image();
        newMap.onload = () => {
            context.drawImage(newMap, 0, 0, newMap.width * 1.75, newMap.height * 1.75)
        };

        newMap.src = map; 
    }, []);

    return(
            <canvas ref={canvasRef} style={{ left: '18%', position: 'absolute', top: '20%'}}></canvas>
          
    )
}


export default MapCanvas;