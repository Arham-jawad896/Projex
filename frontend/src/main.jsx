import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env.local file");
}

// Clerk Configuration
const clerkConfig = {
  publishableKey: PUBLISHABLE_KEY,
  // Set SameSite and Secure cookie settings
  cookieSettings: {
    sameSite: "Lax", // Options: 'Lax', 'Strict', or 'None'
    secure: true, // Ensures cookies are only sent over HTTPS
  },
  // Set domain for cookies (useful if your app uses subdomains)
  domain: window.location.hostname,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider {...clerkConfig} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);
