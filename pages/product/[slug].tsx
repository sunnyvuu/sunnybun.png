import React from "react";
import { urlFor } from "@/lib/client";
import { client } from "@/lib/client";
import image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

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
            <img
              src={urlFor(image && image[0]) as unknown as string}
              width={500}
              height={500}
              className="rounded-md  "
            />
          </div>
        </div>

        <div>
          <h1 className="mt-10 mr-10 font-bold text-4xl self-end text-sky-900">
            {name}
          </h1>
          <div>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4> Details: </h4>
          <p>{details}</p>
          <p>${price}</p>
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

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
