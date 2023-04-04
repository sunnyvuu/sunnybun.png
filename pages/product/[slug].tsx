import React from "react";
import { urlFor } from "@/lib/client";
import { client } from "@/lib/client";
import image from "next/image";

type CatFact = {
  fact: string;
  length: number;
};

const ProductDetails = (props: { product: any; products: any }) => {
  const { product, products } = props;
  const { image, name, details, price } = product;

  return (
    <div>
      <div>
        <div>
          <div>
            <img src={urlFor(image && image[0]) as unknown as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product: { slug: { current: any } }) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (params: { slug: any }) => {
  const { slug } = params;

  const query = `'*[_type == "product" && slug.current=='${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
