import React from "react";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      role: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      // console.log(role);
      let res;
      if (values.role === "DeliveryT") {
        res = await axios.post(
          "http://localhost:8000/api/auth/register",
          values
        );
      } else {
        res = await axios.post(
          "http://localhost:8000/api/auth/register/invUser",
          values
        );
      }
      console.log(res.data);
      return res.data;
    },

    // onSuccess: () => {
    //     queryClient.invalidateQueries("user")
    // }
  });

  const onSubmit = (value) => {
    mutate(value);
    reset("");
  };
  return (
    <main className="bg-blue-400 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-100 flex flex-col gap-5 w-3/4 max-w-[650px]
        px-5 py-5 rounded-md"
      >
        <h1 className="font-semibold text-xl">REGISTER</h1>

        <input
          name="name"
          type="text"
          {...register("name")}
          placeholder="Name"
          className="rounded-md p-2"
        />

        <input
          name="password"
          type="password"
          {...register("password")}
          placeholder="Password"
          className="rounded-md p-2"
        />
        <select className="rounded-md p-2" name="role" {...register("role")}>
          <option value="" disabled>
            Role
          </option>
          <option value="InventoryT">Inventory Team</option>
          <option value="DeliveryT">Delivery Team</option>
        </select>
        <button
          type="submit"
          className="bg-blue-400 py-2 text-slate-200 rounded-md"
        >
          Submit
        </button>
        <p>
          <Link to={"/login"} className="font-semibold">
            Login
          </Link>{" "}
          if you have already registered
        </p>
      </form>
    </main>
  );
};

export default Register;
