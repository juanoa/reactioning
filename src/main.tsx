import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactionsContainer } from "../lib/main";

import styles from "./main.module.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className={styles.root}>
      <ReactionsContainer />
    </main>
  </StrictMode>,
);
