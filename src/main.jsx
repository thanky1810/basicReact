import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./useMemo";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
