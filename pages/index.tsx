import React from "react";
import { Product, FooterBanner, HeroBanner, Footer } from "../components";
import { client } from "../lib/client";

type CatFact = {
  fact: string;
  length: number;
};

export const Home = (props: {
  productData: any;
  bannerData: any;
  catData: CatFact;
}) => {
  const { productData, bannerData, catData } = props;
  console.log(bannerData);

  return (
    <div>
      <HeroBanner catFactData={catData} />

      <div className="text-center py-5">
        <h2 className="text-3xl font-bold text-red-800 py-2">
          Best Selling Products
        </h2>
        <p className="text-stone-500 text-lg">Super Cute Jewelry</p>
      </div>
      <div className="flex justify-evenly">
        {productData?.map((product: any) => product.name)}
      </div>
      <FooterBanner />
    </div>
  );
};

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const productData = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const res = await fetch("https://catfact.ninja/fact");
  const catData = (await res.json()) as CatFact;

  return {
    props: { productData, bannerData, catData },
  };
};

export default Home;
