import React, { useEffect, useState } from "react";

const LocationInfo = () => {
  const [coords, setCoords] = useState(null); // State to hold user's coordinates
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if the browser supports Geolocation API
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    // Fetch user's current position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // On success, store latitude and longitude (rounded to 5 decimal places)
        setCoords({
          lat: pos.coords.latitude.toFixed(5),
          lng: pos.coords.longitude.toFixed(5),
        });
      },
      (err) => setError("Failed to fetch location")
    );
  }, []); // Empty dependency array → runs only once on mount

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
