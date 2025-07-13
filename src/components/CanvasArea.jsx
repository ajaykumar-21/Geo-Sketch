import React, { useEffect, useRef } from "react";

const CanvasArea = () => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 400;

    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    contextRef.current = ctx;

    const saved = localStorage.getItem("geo-sketch");
    if (saved) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0);
      img.src = saved;
    }
  }, []);

  const startDraw = (e) => {
    isDrawing.current = true;
    contextRef.current.beginPath();
    contextRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  return (
    <div className="canvas-area">
      <h2>Sketch Here</h2>
      <canvas ref={canvasRef} onMouseDown={startDraw} />
    </div>
  );
};

export default CanvasArea;
