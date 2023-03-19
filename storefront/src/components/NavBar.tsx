import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import menu from "../assets/menu-icon.svg";

export default function NavBar() {
  return (
    <nav
      className="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-white"
    >
      <div>
        <h1 className="font-bold font-mono">
          <NavLink to="/Home"> SunnyBun.PNG </NavLink>
        </h1>
      </div>

      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              text-base text-gray-800
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
        >
          <li className="font-semibold md:p-4 py-2 block hover:text-pink-800">
            <NavLink to="/Necklaces"> Necklaces </NavLink>
          </li>
          <li className="font-semibold md:p-4 py-2 block hover:text-pink-800">
            <NavLink to="/Earrings"> Earrings </NavLink>
          </li>
          <li className="font-semibold md:p-4 py-2 block hover:text-pink-800">
            <NavLink to="/Bracelets"> Bracelets </NavLink>
          </li>
          <li className="font-semibold md:p-4 py-2 block hover:text-pink-800">
            <NavLink to="/Other Accessories"> Other Accessories </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <p> Check Out </p>
      </div>

      <div>
        <img src={menu} className="xl:hidden w-10 h-10 " />
      </div>
    </nav>
  );
}
