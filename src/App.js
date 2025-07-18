import "./App.css";
import React, { useState, useRef } from "react";
import CanvasArea from "./components/CanvasArea";
import LocationInfo from "./components/LocationInfo";
import useIntersectionObserver from "./utils/useIntersectionObserver";

function App() {
  const canvasRef = useRef(); // Ref to the canvas container (used for intersection observer)
  const [showCanvas, setShowCanvas] = useState(false); // State to toggle the canvas rendering once it's visible

  // Lazy-load the canvas only when it becomes visible in viewport
  useIntersectionObserver(canvasRef, () => {
    setShowCanvas(true);
  });

  return (
    <div className="App">
      <h1>GeoSketch</h1>
      <p className="description">Draw sketches tied to your current location</p>

      <LocationInfo />
      <div ref={canvasRef} className="canvas-wrapper">
        {showCanvas ? <CanvasArea /> : <p>Loading canvas...</p>}
      </div>
    </div>
  );
}

export default App;
