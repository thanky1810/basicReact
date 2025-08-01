import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { App, StoreProvider } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
