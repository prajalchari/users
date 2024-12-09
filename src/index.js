import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ProjectRoutes from "./Routes/ProjectRoutes";

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

