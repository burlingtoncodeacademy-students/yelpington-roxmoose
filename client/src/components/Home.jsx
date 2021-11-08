// import "./App.css";
import React from "react";
import { Link } from "react-router-dom"; // for react router - having a separate "page" for each restaurant
// Each restaurant's separate "page":
import Map from "./Map.js";
import "../styles/main.css";

function Home() {
  // Map center and zoom level that show the whole neighborhood
  const center = [44.486130615466685, -73.2160679713857];
  const zoom = 15

  // Markers for each restaurant:
  let markerChinaExpress2 = [44.48466989157461, -73.22119647631418];
  let markerNunyuns = [44.48447935697636, -73.2178752767957];
  let markerPhoHong = [44.488854309034785, -73.20709166337835];
  let markerPoppyCafe = [44.48963843474987, -73.21004227251197];
  let markerSaigonKitchen = [44.48471290577092, -73.217485046861];
  let markerScout = [44.48786248835677, -73.22535350152101];
  let markerShinjukuStation = [44.484890255619455, -73.21168072600844];
  let markerTacoGordo = [44.4860165622065, -73.20994362508117];


  return (
    <>
      <header>
        <h1>Yelpington! Old North End</h1>
      </header>
      <div id="home-grid">
        <div id="map">
          <Map
            center={center}
            zoom={zoom}
            marker1={markerChinaExpress2}
            marker2={markerNunyuns}
            marker3={markerPhoHong}
            marker4={markerPoppyCafe}
            marker5={markerSaigonKitchen}
            marker6={markerScout}
            marker7={markerShinjukuStation}
            marker8={markerTacoGordo}
          />
        </div>
        <nav id="restaurant-list">
          <h2>Restaurants List:</h2>
          <p class="list">
            <Link to="/restaurant/china-express-2" className="nav-link">
              China Express 2
            </Link>
          </p>
          <p class="list">
            <Link to="/restaurant/nunyuns" className="nav-link">
              Nunyuns
            </Link>
          </p>
          <p class="list">
            <Link to="/restaurant/pho-hong" className="nav-link">
              Pho Hong
            </Link>
          </p>
          <p class="list">
            <Link to="/restaurant/poppy-cafe" className="nav-link">
              Poppy Cafe
            </Link>
          </p>
          <p class="list">
            <Link to="/restaurant/saigon-kitchen" className="nav-link">
              Saigon Kitchen
            </Link>
          </p>
          <p class="list">
            <Link to="/restaurant/scout" className="nav-link">
              Scout & Co
            </Link>
          </p>
          <p class="list">
            <Link to="/restaurant/shinjuku-station" className="nav-link">
              Shinjuku Station
            </Link>
          </p>
          <p class="list">
            <Link to="/restaurant/taco-gordo" className="nav-link">
              Taco Gordo
            </Link>
          </p>
        </nav>
      </div>
    </>
  );
}

export default Home;
