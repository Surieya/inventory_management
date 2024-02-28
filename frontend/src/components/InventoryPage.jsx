import React from "react";
import Navbar from "./Navbar";
import { FaPhone } from "react-icons/fa";

const InventoryPage = () => {
  return (
    <main className="h-screen bg-[#1B4965] p-5">
      <Navbar />
      <section className="flex justify-center items-center h-[90vh] relative">
        <FaPhone className="text-white text-[300px] absolute z-0" />
        <div className="w-[80%] min-h-[400px] backdrop-blur-lg">
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default InventoryPage;
