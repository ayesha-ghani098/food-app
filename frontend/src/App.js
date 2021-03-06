import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style and Assets
import "./App.css";
import Dashboard from "./containers/Dashboard";

// Components
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import CreateProduct from "./containers/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="createProduct" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
