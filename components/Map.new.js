import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, useMapEvents } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import { Map } from "react-leaflet-universal";

export const LocationFinderDummy = ({ setIsRefreshing }) => {
  async function createNewPoint(x, y) {
    const query = await axios({
      method: "POST",
      url: "/api/inventory/new",
      data: {
        type: "",
        x: x,
        y: y,
      },
    });

    return query.data;
  }

  const map = useMapEvents({
    click(e) {
      createNewPoint(e.latlng.lat, e.latlng.lng).then((data) => {
        if (
          confirm("Data was been updated. Do you want to refresh now?") === true
        ) {
          location.reload();
        }
      });
    },
  });

  return null;
};

const MapLayer = () => {
  const position = [41.131, 13.31];
  const [isReady, setIsReady] = useState(false);
  const mapRef = useRef();
  const [dataPoints, setDataPoints] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    setIsReady(true);
  }, []);

  async function fetchDataPoints() {
    const query = await axios({
      method: "GET",
      url: "/api/inventory/all",
    });

    return query.data;
  }

  useEffect(() => {
    console.log("refreshing data...");
    fetchDataPoints().then((data) => {
      data.map((point) => {
        point.latLong = [point.exactLocation.x, point.exactLocation.y];
      });

      setDataPoints(data);
    });
  }, []);

  return (
    isReady && (
      <>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution="its offline"
            url={"../images/SCPlant/{z}/{x}/{y}.png"}
            noWrap={true}
          />

          {dataPoints !== null &&
            dataPoints.map((point, key) => (
              <Marker key={key} position={point.latLong}>
                <Popup>
                  <Text>Type: {point.type}</Text>
                  <Text>UID: {point.uid}</Text>
                </Popup>
              </Marker>
            ))}
          <LocationFinderDummy setIsRefreshing={setIsRefreshing} />
        </MapContainer>
      </>
    )
  );
};

export default MapLayer;
