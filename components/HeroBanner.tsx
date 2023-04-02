import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

type CatFact = {
  fact: string;
  length: number;
};

type bannerDataItem = {
  image: any;
  buttonText: string;
  desc: string;
  discount: string;
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

const HeroBanner = (props: { heroBanner: bannerDataItem }) => {
  const { heroBanner } = props;
  return (
    <div className="flex justify-between pt-1 pr-4 relative bg-slate-400 m-7 rounded-xl">
      <div>
        <p className="m-18px m-10 text-2xl">{heroBanner.smallText}</p>
        <h3 className="mt-4px text-5xl m-10 font-medium">
          {heroBanner.midText}
        </h3>
        <h1 className="text-3xl uppercase m-10 text-white">
          {heroBanner.largeText1}
        </h1>
      </div>
      <img
        src={urlFor(heroBanner.image) as unknown as string}
        alt="hairclips"
        className="m-4 max-h-[36rem]"
      />

      <div className="">
        <Link href={`/product/ID${heroBanner.product}`}>
          <button
            className="m-10 rounded-xl px-5 py-2 bg-sky-100 text-sky-700 border-none mt-40px text-base font-medium"
            type="button"
          >
            {heroBanner.buttonText}
          </button>
        </Link>
        <div className="mt-10 absolute right-3 bottom-0 leading-5 flex flex-col c-red-500">
          <h5 className="mt-10 mr-10 font-bold text-2xl self-end">
            {" "}
            Description{" "}
          </h5>
          <p className="mt-2 ml-5 mr-10 mb-10 font-extralight text-end w-96 text-base text-slate-100">
            {heroBanner.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
