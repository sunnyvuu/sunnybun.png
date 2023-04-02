import React from "react";
import { Product, FooterBanner, HeroBanner, Footer } from "../components";
import { client } from "../lib/client";
import banner from "@/sanity/schemas/banner";

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
  console.log(productData);

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="text-center mt-40px mr-0">
        <h2 className="text-4xl font-extrabold">Best Selling Products</h2>
        <p className="text-stone-500 text-base font-extralight">
          Super Cute Jewelry
        </p>
      </div>
      <div className="flex justify-evenly">
        {productData?.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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
