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
    <div className="flex justify-between pt-1 pr-4 relative bg-gradient-to-r from-pink-200 to-sky-200 m-7 rounded-xl -z-[2]">
      <div>
        <p className="m-18px m-10 text-2xl italic text-pink-950">
          {heroBanner.smallText}
        </p>
        <h3 className="mt-4px text-5xl m-10 font-bold text-pink-950">
          {heroBanner.midText}
        </h3>
        <h1 className="text-3xl uppercase m-10 text-pink-700 font-medium">
          {heroBanner.largeText1}
        </h1>
      </div>
      <img
        src={urlFor(heroBanner.image) as unknown as string}
        alt="hairclips"
        className="-m-[17rem] max-h-[70rem] rotate-[6deg] -z-[1]"
      />

      <div>
        <Link href={`/product/ID${heroBanner.product}`}>
          <button
            className="m-10 rounded-full px-6 py-4 bg-sky-100 text-sky-800 border-none text-xl font-bold shadow-sky-500 shadow-[0_5px_25px_-15px_rgba(0,0,0,0.3)] "
            type="button"
          >
            {heroBanner.buttonText}
          </button>
        </Link>
        <div className="mt-10 absolute right-3 bottom-0 leading-5 flex flex-col c-red-500">
          <h5 className="mt-10 mr-10 font-bold text-4xl self-end text-sky-900">
            {" "}
            Description{" "}
          </h5>
          <p className="mt-2 ml-5 mr-10 mb-10 font-light text-end w-50 text-xl text-slate-900">
            {heroBanner.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
