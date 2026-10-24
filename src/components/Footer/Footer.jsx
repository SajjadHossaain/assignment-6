import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] py-28">
      <div className="container mx-auto space-y-16">
        <div className=" grid gap-5 ml-5 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-3">
            <h1 className="text-white font-bold text-4xl">DigiTools</h1>
            <p className="text-white/50 text-wrap">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-white text-2xl">Product</h2>
            <ul className="space-y-2">
              <li className="text-white">
                <a href="">Features</a>
              </li>
              <li className="text-white">
                <a href="">Pricing</a>
              </li>
              <li className="text-white">
                <a href="">Templates</a>
              </li>
              <li className="text-white">
                <a href="">Integrations</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-white text-2xl">Company</h2>
            <ul className="space-y-2">
              <li className="text-white">
                <a href="">About</a>
              </li>
              <li className="text-white">
                <a href="">Blog</a>
              </li>
              <li className="text-white">
                <a href="">Careers</a>
              </li>
              <li className="text-white">
                <a href="">Press</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-white text-2xl">Resources</h2>
            <ul className="space-y-2">
              <li className="text-white">
                <a href="">Documentation</a>
              </li>
              <li className="text-white">
                <a href="">Help Center</a>
              </li>
              <li className="text-white">
                <a href="">Community</a>
              </li>
              <li className="text-white">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-white text-2xl">Social Links</h2>
            <div className="flex gap-3 items-center">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#111827] hover:bg-gray-300 transition">
                <a href="">
                  <FaInstagram></FaInstagram>
                </a>
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#111827] hover:bg-gray-300 transition">
                <a href="">
                  <FaFacebookF></FaFacebookF>
                </a>
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#111827] hover:bg-gray-300 transition">
                <a href="">
                  <FaXTwitter></FaXTwitter>
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-[#FAFAFA]" />
        <div className="flex flex-col gap-5 md:flex-row justify-between items-center mx-5">
          <p className="text-white">
            &copy; 2026 Digitools. All rights reserved.
          </p>
          <div className="flex justify-center flex-wrap gap-5">
            <a href="#privacy" className="text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white">
              Terms of Service
            </a>
            <a href="#cookies" className="text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
