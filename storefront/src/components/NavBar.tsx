import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import menu from "../assets/menu-icon.svg";
import close from "../assets/close-icon.svg";
import { useState } from "react";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <nav
      className="
      flex items-center justify-between px-4 py-3"
    >
      <div>
        <h1 className="font-bold font-mono">
          <NavLink to="/Home"> SunnyBun.PNG </NavLink>
        </h1>
      </div>

      <img
        src={clicked ? close : menu}
        className="h-6 w-6 cursor-pointer md:hidden block"
        onClick={handleClick}
      />

      <div
        className={
          "md:flex flex-grow justify-center" + (clicked ? " flex" : " hidden")
        }
      >
        <ul
          className="
              text-base text-gray-800
              pt-4
              md:flex
              md:justify-center
              md:pt-0
              md:bg-rose-100
              md:w-full"
        >
          <li className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-rose-300">
            <NavLink to="/Necklaces"> Necklaces </NavLink>
          </li>
          <li className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-rose-300">
            <NavLink to="/Earrings"> Earrings </NavLink>
          </li>
          <li className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-rose-300">
            <NavLink to="/Bracelets"> Bracelets </NavLink>
          </li>
          <li className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-rose-300">
            <NavLink to="/Other Accessories"> Other Accessories </NavLink>
          </li>
        </ul>
        <ul className="md:flex md:justify-end md:bg-rose-200 md:w-1/6">
          <li className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-rose-300">
            <NavLink to="/Shopping Cart"> Check Out </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
