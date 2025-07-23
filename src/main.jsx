import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UseE from "./useEffect.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseE></UseE>
  </StrictMode>
);
