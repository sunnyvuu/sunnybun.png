import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

export default function Product(props: { product: any }) {
  const { product } = props;
  const { image, name, slug, price } = product;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div>
          <img
            src={urlFor(image && image[0]) as unknown as string}
            width={250}
            height={250}
            className="rounded-md  "
          />
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  );
}
