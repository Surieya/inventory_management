import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import EmployeeForm from "./components/EmployeeForm";
const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/emp" element={<EmployeeForm />} />
    </Routes>
  );
};

export default App;
