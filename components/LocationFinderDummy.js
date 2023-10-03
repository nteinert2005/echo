import { useMapEvents } from "react-leaflet";
import axios from "axios";

const LocationFinderDummy = ({ setIsRefreshing }) => {
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

export default LocationFinderDummy;
