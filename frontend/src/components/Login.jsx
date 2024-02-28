import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      role: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (value) => {
      console.log(value);
      let result;
      if (value.role === "DeliveryT") {
        result = await axios.post(
          "http://localhost:8000/api/auth/login",
          value
        );
      } else {
        console.log("inventory");
        result = await axios.post(
          "http://localhost:8000/api/auth/login/invUser",
          value
        );
        // console.log(result);
      }
      return result.data;
    },
    onSuccess: (data) => {
      setAuth(data);
      if (data.role === "InventoryT") {
        navigate("/inventoryUser");
      } else {
        navigate("/deliveryUser");
      }
    },
  });

  const onSubmit = (data) => {
    // console.log(data);
    mutate(data);
    // console.log(result);
  };
  return (
    <main className="bg-blue-400 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-100 flex flex-col gap-5 w-3/4 max-w-[650px]
        px-5 py-5 rounded-md"
      >
        <h1 className="font-semibold text-xl">LOGIN</h1>

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
          <Link to={"/register"} className="font-semibold">
            Register
          </Link>{" "}
          if you haven't yet
        </p>
      </form>
    </main>
  );
};

export default Login;
