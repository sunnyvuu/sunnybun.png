import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

type CatFact = {
  fact: string;
  length: number;
};

type bannerData = {
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

const HeroBanner = (heroBanner: any) => {
  return (
    <div>
      <div>
        <p className="bg-slate-500">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src="" alt="hairclips" />
      </div>
      <div>
        <Link href={`/product/ID${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div>
          <h5> Description </h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
