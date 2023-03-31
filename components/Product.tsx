import React from "react";

interface ProductProps {
  label: string;
  price?: number;
}

export default function Product(props: ProductProps) {
  return <div className="text-red-800">{props.label}</div>;
}
