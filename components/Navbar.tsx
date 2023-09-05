import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex justify-between my-5 mx-7 relative">
      <p className="text-xl font-bold">
        <Link href="/"> SunnyBun.png Jewelry</Link>
      </p>
      <button
        type="button"
        className="text-[25px] text-[gray] cursor-pointer relative transition-transform duration-[0.4s] ease-[ease] bg-transparent border-[none]"
      >
        <AiOutlineShopping />
        <span className="absolute text-xs text-[#eee] bg-[#f02d34] w-[18px] h-[18px] text-center font-semibold rounded-[50%] -right-2">
          1
        </span>
      </button>
    </div>
  );
}
