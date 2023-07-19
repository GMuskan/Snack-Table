import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { TableProvider } from "./Context/TableContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TableProvider>
      <App />
    </TableProvider>
  </StrictMode>
);
