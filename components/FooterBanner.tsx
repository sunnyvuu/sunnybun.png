import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

export default function FooterBanner(props: { footerBanner: any }) {
  const { footerBanner } = props;
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  } = footerBanner;

  return (
    <div className="flex justify-between pt-1 pr-4 relative bg-gradient-to-r from-pink-200 to-sky-200 m-7 rounded-xl">
      <div>
        <div>
          <p className="m-18px m-10 text-2xl italic text-pink-950">
            {discount}
          </p>

          <p className="text-5xl uppercase m-10 text-pink-700 font-medium">
            {saleTime}
          </p>
        </div>

        <div className="mt-10 absolute right-3 bottom-10 leading-5 flex flex-col c-red-500">
          <h3 className="mb-10 mr-10 font-bold text-4xl self-end text-sky-900">
            {midText}
          </h3>
          <Link href={`/product/${product}`}>
            <button
              type="button"
              className="rounded-full px-5 py-3 bg-sky-100 text-sky-800 border-none text-xl font-bold shadow-sky-500 shadow-[0_5px_25px_-15px_rgba(0,0,0,0.3)]"
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
