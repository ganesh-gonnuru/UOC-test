import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for marker icons in Vite + Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapSection() {
  const position = [17.385044, 78.486671]; // Hyderabad coords

  return (
    <section id="map" className="py-16 px-6 bg-blue-200">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900">Our Location</h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Map */}
        <div className="shadow-lg rounded-xl overflow-hidden">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Uditi Overseas Consultancy<br />Hyderabad, India</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Address */}
        <div className="bg-blue-100 p-6 rounded-xl shadow text-blue-900">
          <h3 className="text-4xl font-semibold mb-4">Head Office</h3>
          <p className="text-4xl text-gray-900">Uditi Overseas Consultancy</p>
          <p className="text-xl text-gray-700">MKR Enclave, Pantakalava Road</p>
          <p className="text-xl text-gray-700">Near Nagarguna Hospitals, Kanuru</p>
          <p className="text-xl text-gray-700">Vijayawada, Andhra Pradesh - 52007</p>
          <p className="text-xl text-gray-700">📞 +91 9666873111  9666863111</p>
          <p className="text-xl text-gray-700">📧 info@uditioverseas.com</p>
        </div>
      </div>
    </section>
  );
}
