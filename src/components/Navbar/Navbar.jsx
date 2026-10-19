import React from "react";
import navItems from "../../data/navigation";
import Link from "./Link";
import { ShoppingCart } from "lucide-react";
const Navbar = () => {
  const links = navItems.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="shadow">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="p-3">
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold">
            DigiTools
          </span>
        </div>
        <ul className="gap-8 hidden md:flex">{links}</ul>
        <div className="flex items-center gap-2">
          <ShoppingCart></ShoppingCart>
          <a href="">Login</a>
          <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl">
            <button className="text-4em font-semibold p-2 text-nowrap">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
