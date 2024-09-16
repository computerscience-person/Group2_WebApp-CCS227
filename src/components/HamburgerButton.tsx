import { useState } from "react";
import HamburgerIcon from "../assets/hamburger_button.png";

const HamburgerButton = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 bg-transparent hover:scale-x-110"
      >
        <img src={HamburgerIcon} alt="Menu" className="w-6 h-6" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white text-black divide-y divide-gray-200 rounded-lg shadow-lg w-48">
          <ul className="py-2 text-sm">
            <li>
              <a href="/home" className="block px-4 py-2 hover:bg-gray-100">
                Home Page
              </a>
            </li>
            <li>
              <a href="/about" className="block px-4 py-2 hover:bg-gray-100">
                About
              </a>
            </li>
            <li>
              <a href="/product" className="block px-4 py-2 hover:bg-gray-100">
                Product Page
              </a>
            </li>
            <li>
              <a href="/support" className="block px-4 py-2 hover:bg-gray-100">
                Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerButton;
