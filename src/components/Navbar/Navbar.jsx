import React, { useState } from "react";
import navItems from "../../data/navigation";
import Link from "./Link";
import { Menu, ShoppingCart, X } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="shadow">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-2">
          <ShoppingCart></ShoppingCart>
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
