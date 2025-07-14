import React, { useEffect, useRef } from "react";

const CanvasArea = () => {
  const canvasRef = useRef(null); // Ref for the <canvas> element
  const isDrawing = useRef(false); // Tracks whether the user is currently drawing
  const contextRef = useRef(null); // Stores the 2D canvas context

  useEffect(() => {
    const canvas = canvasRef.current;
    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Initialize 2D drawing context
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000"; // Black stroke color

    contextRef.current = ctx;

    // If a saved drawing exists in localStorage, load it
    const saved = localStorage.getItem("geo-sketch");
    if (saved) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0);
      img.src = saved;
    }
  }, []);

  // Start drawing when mouse is pressed down
  const startDraw = (e) => {
    isDrawing.current = true;
    contextRef.current.beginPath();
    contextRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  // Continue drawing as mouse moves
  const draw = (e) => {
    if (!isDrawing.current) return;
    contextRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    contextRef.current.stroke();
  };

  // Stop drawing when mouse is released or leaves canvas
  const stopDraw = () => {
    isDrawing.current = false;
    contextRef.current.closePath();
    const data = canvasRef.current.toDataURL();
    localStorage.setItem("geo-sketch", data);
  };

  // Clear the canvas and remove saved sketch from localStorage
  const clearCanvas = () => {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    localStorage.removeItem("geo-sketch");
  };

  return (
    <div className="canvas-area">
      <h2>Sketch Here</h2>
      <canvas
        ref={canvasRef}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
      />
      <button onClick={clearCanvas} className="clear-btn">
        Clear Drawing
      </button>
    </div>
  );
};

export default CanvasArea;
