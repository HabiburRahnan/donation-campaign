import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-black p-6">
      <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenuFold></AiOutlineMenuFold>
        )}
      </div>

      <div className="flex justify-between items-center py-6 shadow-lg px-5">
        <Logo></Logo>
        <ul
          className={`gap-5 md:flex duration-1000 absolute md:static  ${
            open ? "top-16" : "-top-60"
          }  px-6 shadow-xl`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }>
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }>
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
