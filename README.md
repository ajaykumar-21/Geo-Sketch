# GeoSketch ✏️📍

**GeoSketch** is a simple React-based drawing app that lets users sketch freely on a canvas and automatically ties each drawing to their current geographic location. It's optimized for performance by lazily loading the canvas only when it's visible.

## 🚀 Features

- 🖌️ Draw on a canvas using mouse or touch
- 📍 Automatically fetch and display the user's location using the Geolocation API
- 💤 Canvas is lazy-loaded using the Intersection Observer API for better performance
- 💾 Drawings are saved to `localStorage` and persist after reload
- 🧹 Clear canvas with a single click
- 🖥️ Built with React and plain CSS

## 🌐 Web APIs Used

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 🛠️ Tech Stack

- React (Vite or CRA)
- JavaScript (ES6+)
- HTML5 Canvas
- CSS (no frameworks)

## 📷 Screenshots

> _(Add screenshots here if submitting or sharing visually)_

## 📁 Folder Structure

- geo-sketch/
- ├── public/
- ├── src/
- │ ├── components/
- │ │ ├── CanvasArea.jsx
- │ │ └── LocationInfo.jsx
- │ ├── utils/
- │ │ └── useIntersectionObserver.js
- │ ├── App.jsx
- │ ├── main.jsx
- │ └── styles.css
- └── README.md

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/geo-sketch.git
cd geo-sketch
```
