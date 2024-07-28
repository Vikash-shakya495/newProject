// src/components/LiveTrackMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LiveTrackMap = () => {
  const position = [19.076, 72.8777]; // Mumbai coordinates

  return (
    <div className="bg-white p-4 rounded shadow-md col-span-1">
      <h2 className="font-bold mb-4">Live Track</h2>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '300px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Truck is here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LiveTrackMap;
