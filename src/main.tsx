import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Policy from "./pages/Policy.tsx";

// tiny static router — the Netlify SPA redirect serves index.html for any
// path, so we just pick the page by pathname (no client-side navigation).
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const Page = path === "/policy" ? Policy : App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
