import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MotionProvider from "./components/MotionProvider.jsx";
import "./index.css";
import { registerWebMCPTools } from "./webmcp.js";

registerWebMCPTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MotionProvider>
      <App />
    </MotionProvider>
  </React.StrictMode>,
);