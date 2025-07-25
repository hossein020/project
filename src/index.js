import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './index.css'
import  ThemeProvider  from "react-bootstrap/ThemeProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
      <>
      <ThemeProvider dir="rtl">
        <App />
      </ThemeProvider>
      </>
    </StrictMode>
  );