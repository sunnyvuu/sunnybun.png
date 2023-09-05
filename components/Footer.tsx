import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="text-[#324d67] text-center font-bold flex flex-col items-center gap-2.5 justify-center mt-5 px-2.5 py-[30px]">
      <p> 2023 SunnBun.png All rights reserved</p>
      <p className="text-3xl flex gap-2.5">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}
