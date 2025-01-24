import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import styles from "./main.module.css";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className={styles.root}>
      <App />
    </main>
  </StrictMode>,
);
