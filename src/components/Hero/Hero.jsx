import React from "react";
import heroImg from "../../assets/banner.png";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row my-10 items-center gap-10">
      <div className="flex-1 space-y-3">
        <div className="inline-flex items-center gap-3 bg-[#E1E7FF] px-4 py-1 rounded-2xl border border-violet-200">
          <span className="flex justify-center items-center h-4 w-4 rounded-full bg-violet-500">
            <span className="flex justify-center items-center rounded-full w-3 h-3 bg-linear-to-r from-[#4f39f693] to-[#9614faae]">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-2 h-2 rounded-full"></span>
            </span>
          </span>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            New: AI-Powered Tools Available
          </span>
        </div>
        <div className="space-y-3 p-3 ">
          <h1 className="font-extrabold text-4xl sm:text-7xl text-[#101727]">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br /> software—all in one place. Start creating faster today.{" "}
            <br /> Explore Products
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            Explore Products
          </button>
          <button className="btn btn-outline btn-primary rounded-full">
            <Play></Play>
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
