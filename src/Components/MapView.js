import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapUpdater = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (coordinates && coordinates.length === 2) {
      map.setView(coordinates, 6); // Adjust zoom level as needed
    }
  }, [coordinates, map]);

  return null;
};


const customIcon = new L.Icon({
  iconUrl: 'path-to-your-custom-icon.png',
  iconRetinaUrl: 'path-to-your-custom-icon-2x.png',
  shadowUrl: 'path-to-your-marker-shadow.png',
  iconSize: [25, 41], // Width, height
  iconAnchor: [12, 41], // Centered at the bottom
  popupAnchor: [1, -34], // Position of the popup
  shadowSize: [41, 41],
});

const MapView = ({ data, coordinates }) => {
  const defaultPosition = [51.505, -0.09];

  return (
    <MapContainer
      center={coordinates && coordinates.length === 2 ? coordinates : defaultPosition}
      zoom={6}
      style={{ height: '300px', width: '100%' }}
    >
      <MapUpdater coordinates={coordinates} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {coordinates && coordinates.length === 2 && (
        <Marker position={coordinates}>
          <Popup>
            Active: {data?.active ?? 0} <br />
            Recovered: {data?.recovered ?? 0} <br />
            Deaths: {data?.deaths ?? 0}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapView;
