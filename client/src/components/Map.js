import "../styles/main.css";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"; // tile layer name: CartoDB.Voyager
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // not yet sure what this is, but was in Julie's workshop one week. Putting it here just in case
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Had to add the default icon as I was getting a broken image icon instead:
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // Added iconSize so I knew what I was basing iconAnchor off of
  iconAnchor: [12.5, 41], // Added iconAnchor so that I could place the TIP of the icons is at each restaurant's lat/long (it was defaulting to the top left of the icon I believe), so they showed up off from where I'd expect them to be, especially when zoomed out). Credit to: https://stackoverflow.com/questions/46101450/explanation-of-leaflet-custom-icon-latlng-vs-xy-coordinates
  popupAnchor: [0, -45] // After changing iconAnchor, needed to change the pop-up anchor to keep it above the icon
});

function Map(props) {

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />
      <Marker position={props.marker1} icon={DefaultIcon}><Popup><a href="/restaurant/china-express-2" className="nav-link">China Express 2</a></Popup></Marker>
      <Marker position={props.marker2} icon={DefaultIcon}><Popup><a href="/restaurant/nunyuns" className="nav-link">Nunyuns</a></Popup></Marker>
      <Marker position={props.marker3} icon={DefaultIcon}><Popup><a href="/restaurant/pho-hong" className="nav-link">Pho Hong</a></Popup></Marker>
      <Marker position={props.marker4} icon={DefaultIcon}><Popup><a href="/restaurant/poppy-cafe" className="nav-link">Poppy Cafe</a></Popup></Marker>
      <Marker position={props.marker5} icon={DefaultIcon}><Popup><a href="/restaurant/saigon-kitchen" className="nav-link">Saigon Kitchen</a></Popup></Marker>
      <Marker position={props.marker6} icon={DefaultIcon}><Popup><a href="/restaurant/scout" className="nav-link">Scout & Co</a></Popup></Marker>
      <Marker position={props.marker7} icon={DefaultIcon}><Popup><a href="/restaurant/shinjuku-station" className="nav-link">Shinjuku Station</a></Popup></Marker>
      <Marker position={props.marker8} icon={DefaultIcon}><Popup><a href="/restaurant/taco-gordo" className="nav-link">Taco Gordo</a></Popup></Marker>
    </MapContainer>
  );
}

export default Map;