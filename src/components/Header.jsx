import React from "react";
import globe from "../assets/images/globe.png";

export default function Header() {
  return (
    <header className="container mx-auto bg-[#F55A5A] flex justify-center items-center gap-3 py-4">
      <img src={globe} alt="Globe" className="w-6 h-6" />
      <p className="text-white font-medium text-sm">my travel journal</p>
    </header>
  );
}
