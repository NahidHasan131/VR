import {Menu,  X} from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-12 mx-auto relative text-sm">
        <div className="flex items-center justify-between">

          <div className="flex items-center shrink-0">
            <span className="text-xl tracking-tight font-semibold">VR <span className="bg-linear-to-r from-green-400 to-green-700 text-transparent bg-clip-text">Solution</span> </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12 mt-2">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <a href={item.href} className="group inline-block text-white">
                {item.label}
                <hr className="mt-1 h-0.5 w-0 border-0
                     bg-linear-to-r from-green-400 to-green-700
                     transition-all duration-300
                     group-hover:w-full"/>
                </a>
                {/* <a href={item.href} className="relative pb-1 text-white
                  after:content-['']
                  after:absolute after:left-0 after:bottom-0
                  after:h-0.5 after:w-0
                  after:bg-linear-to-r after:from-green-400 after:to-emerald-600
                  after:transition-all after:duration-300
                  hover:after:w-full">
                {item.label}</a> */}
              </li>
            ))}
          </ul>



          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
            <a href="#" className="bg-linear-to-r from-green-400 to-emerald-600 py-2 px-3 rounded-md">Create an account</a>
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
              <a href="#" className="bg-linear-to-r from-green-500 to-emerald-800 p-3 rounded-md">Create an account</a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
