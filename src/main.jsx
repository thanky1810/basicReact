import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.jsx";
import TodoList from "./TodoList.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  // </StrictMode>,

  <TodoList></TodoList>
);
