import React from "react";
import { FaHome, FaTruck, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../assets/pexels-pixabay-462331.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <main>
      <section className="bg-[#1B4965] h-screen pt-20">
        <Navbar />
        <div className="text-white flex justify-between items-center h-[90vh]  mx-auto max-w-[1000px]">
          <FaPhone className="text-[200px]" />
          <FaTruck className="text-[200px]" />
          <FaHome className="text-[200px]" />
        </div>
      </section>
      <section className="bg-[#5FA8D3] pb-5 w-full flex flex-col  items-center">
        <h1 className="text-black font-bold text-[100px]">DLVERY</h1>
        <div className="flex justify-between w-[80%]">
          <p className="font-semibold text-lg">
            Revolutionize Your Deliveries.
          </p>
          <p className="font-semibold text-lg">Join Now!! </p>
        </div>
        <div className="w-[80%] max-w-[800px] flex justify-center items-center py-5">
          <img src={Image} className="grayscale w-full h-full" />
        </div>
      </section>
    </main>
  );
};

export default Home;
