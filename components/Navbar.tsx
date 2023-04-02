import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

export default function Navbar() {
  return (
    <div>
      <p>
        <Link href="/"> SunnyBun.png Jewelry</Link>
      </p>
      <button type="button" onClick="">
        <AiOutlineShopping />
        <span>1</span>
      </button>
    </div>
  );
}
