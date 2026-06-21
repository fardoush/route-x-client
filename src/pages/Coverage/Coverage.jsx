import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { IoMdSearch } from "react-icons/io";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  //   console.log(serviceCenters);

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      // go to the location
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div>
      <h2 className="text-5xl text-secondary">
        We are available in 64 districts
      </h2>

      <div className="w-full max-w-2xl mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-[#F0F4F8] rounded-full p-1 pl-6 shadow-sm border border-gray-100 transition-all focus-within:ring-2 focus-within:ring-[#C5E86C]/50"
        >
          <div className="text-[#1A1A1A] mr-3 flex-shrink-0">
            <IoMdSearch size={24} />
          </div>

          {/* Input Field */}
          <input
            type="search"
            name="location"
            placeholder="Search here"
            className="w-full bg-transparent text-gray-700 placeholder-[#999999] text-lg font-normal focus:outline-none py-2"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="bg-[#C5E86C] text-[#1A1A1A] hover:bg-[#B3D65A] font-bold text-lg px-9 py-2 rounded-full transition-colors duration-200 cursor-pointer ml-2 self-stretch flex items-center"
          >
            Search
          </button>
        </form>
      </div>

      {/* map  */}

      <div className="w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                {center.district} <br /> Service Area:{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
