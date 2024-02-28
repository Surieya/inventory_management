import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import EmployeeForm from "./components/EmployeeForm";
import Home from "./components/Home";
import InventoryPage from "./components/InventoryPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/emp" element={<EmployeeForm />} />
      <Route path="inventoryUser" element={<InventoryPage />} />
    </Routes>
  );
};

export default App;
