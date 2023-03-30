import React from "react";

export const Home = () => {
  return (
    <div>
      HeroBanner
      <div className="text-center py-5">
        <h2 className="text-3xl font-bold text-red-800 py-2">
          Best Selling Products
        </h2>
        <p className="text-stone-500 text-lg">Super Cute Jewelry</p>
      </div>
      <div className="flex justify-evenly">
        {["Product1", "Product2"].map((product) => product)}
      </div>
      Footer
    </div>
  );
};

export default Home;
