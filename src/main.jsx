import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./useContext/App";
import { ThemeProvider } from "./useContext/ThemeContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
