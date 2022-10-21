import React from "react";
import ReactDOM from "react-dom/client";
import { ContexProvider } from "./context/Context";
import App from "./App";
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContexProvider>
      <App />
    </ContexProvider>
  </React.StrictMode>
);
