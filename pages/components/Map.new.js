import { MapContainer, Marker, Popup, useMapEvents } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";


export const LocationFinderDummy = () => {
    const map = useMapEvents({
        click(e) {
            console.log(e)
        }
    })

    return null;
}

const MapLayer = () => {
    const position = [41.131, 13.31]


    return(
        <>
        { typeof window !== 'undefined' && 
        <MapContainer center={[0,0]} zoom={2} scrollWheelZoom={false}>
            <TileLayer  attribution="its offline" url={'../images/SCPlant/{z}/{x}/{y}.png'} />

            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup.
                </Popup>
            </Marker>
            <LocationFinderDummy /> 
        </MapContainer>
        }
    </>
    )
}


export default MapLayer;