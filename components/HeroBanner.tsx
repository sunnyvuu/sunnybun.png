import React from "react";
import Link from "next/link";

type CatFact = {
  fact: string;
  length: number;
};

const HeroBanner = (props: { catFactData: CatFact }) => {
  const { catFactData } = props;

  return (
    <div>
      <div>
        <p> {catFactData.fact}</p>
        <h3> MID TEXT </h3>
        <img src="" alt="hairclips" />
      </div>
      <div>
        <Link href="/product/ID">
          <button type="button">BUTTON TEXT</button>
        </Link>
        <div>
          <h5> Description </h5>
          <p> DESCRIPTION </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
