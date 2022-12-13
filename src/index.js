import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// root adında sabit oluşturulup index.html'deki id'si root olan div seçilerek App komponenti render edilmiş.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
