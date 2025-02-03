import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TaskForm } from "./TaskForm";
import { Header } from "./header";
import "./index.css";

const taskForm = createRoot(document.getElementById("taskForm") as Element);
const header = createRoot(document.getElementById("header") as Element);

taskForm.render(
  <StrictMode>
    <TaskForm />
  </StrictMode>
);

header.render(
  <StrictMode>
    <Header />
  </StrictMode>
);
