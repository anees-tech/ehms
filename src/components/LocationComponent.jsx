import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons not displaying
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LocationComponent = () => {
  // Define the default location (coordinates for a random location, you can change this)
  const position = [31.5041, 74.3293]; // Replace with your coordinates

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Where We Are Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div data-aos="fade-right" className="flex flex-col items-center md:items-start md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Where are we?</h2>
            <p className="text-gray-600 mb-6 w-[80%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Leaflet Map Section */}
          <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center z-0">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: '350px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  We are here! <br /> Replace this with your location.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
