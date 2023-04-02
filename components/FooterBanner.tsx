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
    <div>
      <div>
        <div>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image) as unknown as string} />
      </div>
    </div>
  );
}
