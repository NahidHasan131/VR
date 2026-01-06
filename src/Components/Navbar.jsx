import {Menu,  X} from "lucide-react";
import logo from '../assets/logo.png';
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-12 mx-auto relative text-sm">
        <div className="flex items-center justify-between">

          <div className="flex items-center shrink-0">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-xl tracking-tight">VR</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
            <a href="#" className="bg-linear-to-r from-orange-500 to-red-800 py-2 px-3 rounded-md">Create an account</a>
          </div>  

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        { isMenuOpen && (
          <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-center"> 
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
              <a href="#" className="bg-linear-to-r from-orange-500 to-red-800 py-2 px-3 rounded-md">Create an account</a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
