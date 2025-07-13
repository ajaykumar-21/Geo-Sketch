import React, { useEffect, useState } from "react";

const LocationInfo = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude.toFixed(5),
          lng: pos.coords.longitude.toFixed(5),
        });
      },
      (err) => setError("Failed to fetch location")
    );
  }, []);

  return (
    <div className="location-box">
      <h2>Your Location</h2>
      {coords ? (
        <p>
          Latitude: {coords.lat} | Longitude: {coords.lng}
        </p>
      ) : (
        <p>{error || "Fetching location..."}</p>
      )}
    </div>
  );
};

export default LocationInfo;
