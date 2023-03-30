import React from "react";

export const Home = () => {
  return (
    <div>
      HeroBanner
      <div>
        <h2>Best Selling Products</h2>
        <p>Super Cute Jewelry</p>
      </div>
      <div>{["Product1", "Product2"].map((product) => product)}</div>
      Footer
    </div>
  );
};

export default Home;
