import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>

      <h1 className="text-center bg-slate-300 p-8">Hello World :3c</h1>
    </div>
  );
}

export default App;
