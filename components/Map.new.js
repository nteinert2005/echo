import { Button, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, useMapEvents } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import { Map } from "react-leaflet-universal";
import EditModal from "./EditModal";
import LocationFinderDummy from "./LocationFinderDummy";
import DeleteModal from "./DeleteModal";

const MapLayer = () => {
  const position = [41.131, 13.31];
  const [isReady, setIsReady] = useState(false);
  const mapRef = useRef();
  const [dataPoints, setDataPoints] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

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

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

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
              <Marker
                style={{ background: "red" }}
                key={key}
                position={point.latLong}
              >
                <Popup>
                  <Text>Type: {point.type}</Text>
                  <Text>UID: {point.uid}</Text>
                  <Button
                    onClick={() => {
                      setSelectedItem(point);
                      onEditOpen();
                    }}
                    mr="1"
                    bgColor={"#3B3734"}
                    textColor={"white"}
                  >
                    {" "}
                    Edit{" "}
                  </Button>
                  <Button
                    ml="1"
                    bgColor={"#E60049"}
                    textColor={"white"}
                    onClick={() => {
                      setSelectedItem(point);
                      onDeleteOpen();
                    }}
                  >
                    {" "}
                    Delete{" "}
                  </Button>
                </Popup>
              </Marker>
            ))}
          <LocationFinderDummy setIsRefreshing={setIsRefreshing} />
          <EditModal
            isOpen={isEditOpen}
            onClose={onEditClose}
            onOpen={onEditOpen}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <DeleteModal
            isOpen={isDeleteOpen}
            onClose={onDeleteClose}
            onOpen={onDeleteOpen}
            selectedItem={selectedItem}
          />
        </MapContainer>
      </>
    )
  );
};

export default MapLayer;
