import { React } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip} from "react-leaflet";
import { NavLink } from "react-router-dom";


function Map(props) {
  const {resturaunts} = props
  let target = [42.33159631519367, -71.11743606508556]
  

  return (
    <>
    <div id = "big-map">
        <MapContainer 
            center={target} 
            zoom={16} 
            scrollWheelZoom={false} 
            style={{height:"40rem", width:"40rem"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {resturaunts.map(resturaunt => (
            <Marker
              key = {resturaunt.name} 
              position={[resturaunt.latitudeAndLongitude.latitude, resturaunt.latitudeAndLongitude.longitude]}
             >
                <Popup >
                    {[resturaunt.name]}
                    <br/>
                    {[resturaunt.address]}
                    <br/>
                    {[resturaunt.cuisine]}
                    <br/>
                    <NavLink to = {`${resturaunt.name.split(" ").join("")}`}>{[resturaunt.name]}</NavLink>
                </Popup>
                <Tooltip>{[resturaunt.name]}</Tooltip>
              </Marker>
              ))}
              

        </MapContainer>
      </div>
</>
  );
}

export default Map;