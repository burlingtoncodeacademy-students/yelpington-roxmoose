import "../styles/main.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -45]
});

function MiniMap(props) {

  // This next chunk of code is to allow me to change the map center from the original (centered at the neighborhood center) to the modified one based on each restaurant's location (via useState/Fetch). The map center wasn't changing for me, and apparently that's by design; according to Leaflet documentation, the props of MapContainer are "immutable."
  // Credit to this stack exchange for explanation and code: https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes 
  // And credit to Julie for pointing me there!
  let mapCenter;
  function ChangeView() {
    const map = useMap();
    mapCenter = map.setView(props.center);
    return null;
  }

  return (
    <MapContainer
      center={props.center}
      zoom={17.5}
      style={{ height: "300px", width: "450px" }}
    >
      <ChangeView center={mapCenter}/>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={props.center} icon={DefaultIcon}>
        <Popup>
          <div id="page-popup">{props.name}</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MiniMap;
