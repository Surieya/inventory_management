import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    department: "",
    dob: "",
    gender: "",
    designation: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { employeeId, name, department, dob, gender, designation, salary } =
      formData;

    try {
      await axios.post("http://localhost:5000/submit-form", {
        employeeId,
        name,
        department,
        dob,
        gender,
        designation,
        salary,
      });

      toast.success("Employee data submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred while submitting data");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
          />
        </label>
        <label>
          Employee Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Department:
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </label>
        <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </label>
        <label>
          Salary:
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
