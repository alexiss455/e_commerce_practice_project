import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className=" max-w-7xl mx-auto md:px-6">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
