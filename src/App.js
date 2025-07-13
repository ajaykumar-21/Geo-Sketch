import "./App.css";
import React, { useState, useRef } from "react";
import CanvasArea from "./components/CanvasArea";

function App() {
  const canvasRef = useRef();
  const [showCanvas, setShowCanvas] = useState(true);
  return (
    <div className="App">
      <h1>GeoSketch</h1>
      <div ref={canvasRef} className="canvas-wrapper">
        {showCanvas ? <CanvasArea /> : <p>Loading canvas...</p>}
      </div>
    </div>
  );
}

export default App;
