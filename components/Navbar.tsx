"use client";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-5 bg-[#ffffff] text-md">
      <img src="/images/logo.png" alt="Company Logo" className="ml-8" />
      
      {/* Desktop Navigation */}
      <div className="flex space-x-8 font-medium items-center md:flex hidden">
        <a href="#crypto-taxes" className="hover:text-blue-500">Crypto Taxes</a>
        <a href="#free-tools" className="hover:text-blue-500">Free Tools</a>
        <a href="#resource-center" className="hover:text-blue-500">Resource Center</a>
        <button className="bg-gradient-to-tr from-[#2971EA] to-[#1B4AEF] text-white font-bold px-4 py-2 border rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden block">
        <MenuIcon
          className="cursor-pointer"
          aria-label="Open menu"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute rounded-lg top-16 right-0 w-1/2 bg-[#ffffff] shadow-lg flex flex-col space-y-4 px-5 py-4 z-10 md:hidden">
          <a href="#crypto-taxes" className="hover:text-blue-500">Crypto Taxes</a>
          <a href="#free-tools" className="hover:text-blue-500">Free Tools</a>
          <a href="#resource-center" className="hover:text-blue-500">Resource Center</a>
          <button className="bg-gradient-to-tr from-[#2971EA] to-[#1B4AEF] text-white font-bold px-4 py-2 border rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
