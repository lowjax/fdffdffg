import React from "react";
import  ReactDOM from "react-dom";
import { App } from "./app";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// const appElement = document.getElementById("app")
// ReactDOM.render(<App />, appElement)

ReactDOM.render (
    <React.StrictMode>
<BrowserRouter>
  <Routes>
    <Route path="*" element={<App />} />
  </Routes>
</BrowserRouter>
</React.StrictMode>,
document.getElementById("app")
)
