import React, { useState } from "react";
import navItems from "../../data/navigation";
import Link from "./Link";
import { Menu, ShoppingCart, X } from "lucide-react";
const Navbar = ({ cardCount }) => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="flex items-center">
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-red-600 md:hidden"></X>
            ) : (
              <Menu className="text-blue-500 md:hidden"></Menu>
            )}
          </span>
          <ul
            className={`md:hidden absolute duration-1000 ${open ? "top-15" : "-top-60"} bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-5 rounded-2xl`}
          >
            {links}
          </ul>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold p-2">
            DigiTools
          </span>
        </div>
        <ul className="gap-8 hidden md:flex">{links}</ul>
        <div className="flex items-center gap-4">
          <div className="relative">
            <ShoppingCart
              size={16}
            ></ShoppingCart>
            <span className="absolute -top-2 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cardCount.length}
            </span>
          </div>
          <a href="">Login</a>
          <div className="rounded-2xl">
            <button className="btn btn-primary text-nowrap">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
