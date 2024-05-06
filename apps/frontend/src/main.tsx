import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </React.StrictMode>
    </BrowserRouter>
  </React.StrictMode>
);
