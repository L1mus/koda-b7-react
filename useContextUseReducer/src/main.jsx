import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthReducerProvider } from "./context/auth/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthReducerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthReducerProvider>,
);
