import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // Add this import
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    {" "}
    {/* Wrap App with HelmetProvider */}
    <App />
  </HelmetProvider>
);
