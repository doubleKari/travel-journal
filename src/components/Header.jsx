import React from "react";
import globe from "../assets/images/globe.png";

export default function Header() {
  return (
    <header className="w-full bg-[#F55A5A] flex justify-center items-center gap-3 py-4 fixed top-0">
      <img src={globe} alt="Globe" className="w-6 h-6" />
      <p className="text-white font-medium text-sm sm:text-base">
        my travel journal
      </p>
    </header>
  );
}
