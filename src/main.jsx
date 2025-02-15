import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import { GlobalContext } from "./context/context.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalContext>
      <App />
    </GlobalContext>
  </BrowserRouter>,
)

