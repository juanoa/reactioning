import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactionsContainer } from "../lib/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactionsContainer />
  </StrictMode>,
);
